// Copyright 2024 DatabendLabs.
// @ts-nocheck
import { useSafeState } from 'ahooks';
import clsx from 'clsx';
import React, { FC, memo, ReactElement, useEffect, useRef } from 'react';
import {
  filterMillisecond,
  filterSize,
  getPercent,
  toThousands,
} from '../utils/tools';

import './styles.less';

import { Button, message, Space, Tooltip } from 'antd';
import DatabendTooltip from 'databend-profile-ui/DatabendTooltip';
import NoResultWithAction from 'databend-profile-ui/NoResultWithAction';
import ProgressPercent from 'databend-profile-ui/Progress/progress-percent';
import { clone } from 'lodash-es';
import CodeWithTooltip from '../CodeWithTooltip';
import DatabendIcon from '../DatabendIcon';
import { useReshape } from '../hooks/useReshape';
import ResetSpinLoading from '../Loading/SpinLoading';
import SimpleLegend from '../SimpleLegend';
import CacheFlowAnalysisGraph from './CacheFlowAnalysisGraph';
import MetricsModal from './metrics-modal';

type TUnit = 'NanoSeconds' | 'MillisSeconds' | 'Bytes' | 'Rows' | 'Count';
const CPU_TIEM_KEY = 'CpuTime';
const WAIT_TIEM_KEY = 'WaitTime';
interface IProps {
  profileRef?: any;
  queryDuration: number;
  orgSlug?: string;
  queryId?: string;
  outValue?: string;
  countShow?: number;
  offsetWidth?: number;
  offsetHeight?: number;
  showTextArea?: boolean;
  initLoading?: boolean;
  isNeedMetrics?: boolean;
  isDemo?: boolean;
  isLight?: boolean;
}
interface IStatisticsDesc {
  _type: string;
  desc: string;
  index: number;
  _value: any;
  display_name: string;
  displayName?: string;
  plain_statistics?: boolean;
  unit?: TUnit;
}
interface IErrors {
  backtrace: string;
  detail: string;
  message: string;
  _errorType: string;
}
interface IOverview {
  cpuTime: number;
  waitTime: number;
  totalTime: number;
  isTotalBigerZero?: boolean;
  totalTimePercent?: string;
  cpuTimePercent?: string;
  waitTimePercent?: string;
  isNode?: boolean;
  id?: string;
  labels?: { name: string; value: any[] }[];
  statisticsDescArray?: IStatisticsDesc[];
  name?: string;
  metrics?: any;
  errors?: IErrors[];
}

function transformErrors(errors: any) {
  return errors?.map((error: any) => {
    const type = Object.keys(error)[0];
    return {
      _errorType: type,
      message: error[type]?.message || '', // 提取错误信息
      detail: error[type]?.detail || '', // 提取详细信息
      backtrace: error[type]?.backtrace?.build_id?.join(',') || '', // 提取堆栈信息
    };
  });
}

function formatValue(unit: TUnit, value: number) {
  if (unit === 'Bytes') {
    return filterSize(value);
  } else if (unit === 'Rows' || unit === 'Count') {
    return toThousands(value);
  } else if (unit === 'MillisSeconds') {
    return filterMillisecond(value);
  } else if (unit === 'NanoSeconds') {
    return filterMillisecond(value / 1000000);
  } else {
    return value;
  }
}

const QueryProfile: FC<IProps> = ({
  profileRef,
  queryDuration,
  queryId = 'analysis',
  outValue,
  countShow,
  offsetWidth = 400,
  offsetHeight = 150,
  showTextArea = true,
  initLoading = false,
  isNeedMetrics = false,
  isDemo = false,
  isLight = true,
}): ReactElement => {
  const [graphSize, setGraphSize] = useSafeState(0);
  const profileWrapRefCanvas = useRef(null);
  const profileWrapRef = useRef(null);
  const [graphSizeHeight, setGraphSizeHeight] = useSafeState(
    window.innerHeight - 150,
  );
  const { reshapeDOM } = useReshape();
  const graphRef = useRef(undefined);
  const [plainData, setPlainData] = useSafeState([]);
  const overviewInfoCurrent = useRef(undefined);
  const [isTotalOverview, setIsTotalOverView] = useSafeState(true);
  const [activeName, setActiveName] = useSafeState('');
  const [rangeData, setRangeData] = useSafeState([]);
  const [filterStatisticsDescArray, setFilterStatisticsDescArray] =
    useSafeState([]);
  const [metriesVisible, setMetriesVisible] = useSafeState(false);
  const [tooltipInfo, setTooltipInfo] = useSafeState({
    clientX: 0,
    clientY: 0,
    show: false,
    text: '',
  });

  const [overviewInfo, setOverviewInfo] = useSafeState<IOverview>({
    cpuTime: 0,
    waitTime: 0,
    isTotalBigerZero: false,
    totalTime: 0,
    totalTimePercent: '0%',
    labels: undefined,
    statisticsDescArray: [],
    metrics: null,
  });

  function dealData(data: any) {
    const profiles = data?.profiles;
    const statistics_desc = data?.statistics_desc;
    const cpuTimeIndex = statistics_desc[CPU_TIEM_KEY]?.index;
    const waitTimeIndex = statistics_desc[WAIT_TIEM_KEY]?.index;
    let cpuTime = 0;
    let waitTime = 0;
    const overviewStatisticsDescArray = [];
    profiles?.forEach((item) => {
      item.id = String(item.id);
      item.parent_id = String(item.parent_id);
      const errors = item?.errors;
      const cpuT = item?.statistics[cpuTimeIndex];
      const waitT = item?.statistics[waitTimeIndex];
      item.totalTime = cpuT + waitT;
      item.cpuTime = cpuT;
      item.waitTime = waitT;
      cpuTime += cpuT;
      waitTime += waitT;
      item.errors = errors?.length > 0 ? transformErrors(item?.errors) : [];
      item.statisticsDescArray = Object.entries(statistics_desc).map(
        ([_type, descObj]: [string, IStatisticsDesc]) => ({
          _type,
          desc: descObj?.desc,
          display_name: descObj?.display_name || descObj?.displayName,
          index: descObj?.index,
          unit: descObj.unit,
          plain_statistics: descObj?.plain_statistics,
          _value: item.statistics[descObj?.index],
        }),
      );
    });
    const totalTime = cpuTime + waitTime;
    profiles?.forEach((item) => {
      item.totalTimePercent = getPercent(item?.totalTime, totalTime);
      item.cpuTimePercent = getPercent(item?.cpuTime, item.totalTime);
      item.waitTimePercent = getPercent(item?.waitTime, item.totalTime);
    });
    setPlainData(profiles);
    setRangeData(
      clone(profiles)
        ?.filter((item) => parseFloat(item.totalTimePercent) > 0.09)
        ?.sort((a, b) => b.totalTime - a.totalTime),
    );
    const cpuTimePercent = getPercent(cpuTime, totalTime);
    const waitTimePercent = getPercent(waitTime, totalTime);
    const info = {
      cpuTime,
      waitTime,
      totalTime,
      totalTimePercent: '100%',
      cpuTimePercent,
      waitTimePercent,
      statisticsDescArray: overviewStatisticsDescArray,
      isNode: false,
      errors: [],
    };
    overviewInfoCurrent.current = info;
    setOverviewInfo(info);
  }
  function resetFitView() {
    const graph = graphRef?.current;
    if (graph) {
      graph?.fitView();
    }
  }
  const handleResize = () => {
    if (profileRef) {
      if (isDemo) {
        setGraphSize(700);
      } else {
        setGraphSize(profileRef?.offsetWidth - offsetWidth);
      }
    }
    setGraphSizeHeight(window.innerHeight - offsetHeight);
  };

  useEffect(() => {
    if (outValue) {
      try {
        dealData(outValue);
      } catch (error) {
        message.destroy();
        message.warning('Incorrect data');
      }
    }
  }, [countShow, outValue]);

  useEffect(() => {
    if (initLoading && graphRef.current) {
      resetFitView();
    }
  }, [initLoading]);

  useEffect(() => {
    if (plainData?.length) {
      handleResize();
    }
  }, [plainData, showTextArea]);

  useEffect(() => {
    const filterStatisticsDescArray = overviewInfo?.statisticsDescArray?.filter(
      (item) => item._value > 0,
    );
    setFilterStatisticsDescArray(filterStatisticsDescArray);
  }, [overviewInfo?.statisticsDescArray]);

  useEffect(() => {
    handleResize();
    reshapeDOM(() => {
      handleResize();
    });
  }, []);
  function setOverInfo(modal: any) {
    const {
      totalTime,
      totalTimePercent,
      cpuTime,
      waitTime,
      cpuTimePercent,
      waitTimePercent,
      id,
      isNode,
      labels,
      statisticsDescArray,
      name,
      errors,
    } = modal;
    setActiveName(id);
    setOverviewInfo({
      cpuTime,
      waitTime,
      totalTime,
      totalTimePercent,
      cpuTimePercent,
      waitTimePercent,
      labels,
      statisticsDescArray,
      isNode,
      name,
      id,
      metrics: modal?.metrics,
      errors,
    });
  }
  function getAllNodes(graph: any) {
    return graph.getNodes();
  }
  function setNodeActive(graph: any, node: any) {
    graph.setItemState(node, 'highlight', true);
  }
  function clearNodeActive(graph: any) {
    getAllNodes(graph).forEach((n: any) => {
      graph.clearItemStates(n);
    });
  }
  function resetToolTipInfo() {
    setTooltipInfo({ clientX: 0, clientY: 0, show: false, text: '' });
  }
  return (
    <>
      {tooltipInfo?.show && (
        <DatabendTooltip
          position={{ x: tooltipInfo?.clientX, y: tooltipInfo.clientY }}
          title={tooltipInfo.text}
        />
      )}
      <div ref={profileWrapRef} className={'profile-index-container'}>
        {plainData?.length > 0 && (
          <div className={'profile-index-details-info'}>
            {rangeData?.length > 0 && (
              <div className={'profile-index-top-ranking'}>
                <div className="profile-indx-most-expensive-nodes">
                  {' '}
                  Most Expensive Nodes
                  <span className="profile-index-ranking-length">
                    {' '}
                    ({rangeData?.length} of {plainData?.length})
                  </span>
                </div>
                <div style={{ marginTop: '8px' }}>
                  {rangeData?.map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          const id = item?.id;
                          if (activeName === id) {
                            return;
                          }
                          setOverInfo({
                            ...item,
                            isNode: true,
                          });
                          setIsTotalOverView(false);
                          const graph = graphRef.current;
                          const nodes = graph?.cfg.nodes;
                          const node = nodes?.find(
                            (node) => node?._cfg.id === id,
                          );
                          const zoom = graph?.getZoom();
                          const x = node?._cfg?.bboxCache?.x;
                          const y = node?._cfg?.bboxCache?.y;
                          const width = graph?.getWidth();
                          const height = graph?.getHeight();
                          // 计算节点中心相对于画布中心的偏移量
                          const offsetX = width / 2 - x * zoom;
                          const offsetY = height / 2 - y * zoom + 20;
                          // 平移画布，使得节点位于画布中心
                          clearNodeActive(graph);
                          setNodeActive(graph, node);
                          if (nodes?.length > 1) {
                            graph.moveTo(offsetX, offsetY);
                          }
                        }}
                        key={index}
                        className={clsx(
                          'profile-index-top-item-style',
                          activeName === item.id &&
                            'profile-index-top-active-item-style',
                        )}
                      >
                        <span>
                          {item.name} [{item.id}]
                        </span>
                        <span className="profile-index-top-item-time">
                          {item.totalTimePercent}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div
              className={clsx(
                'profile-index-top-ranking',
                'profile-common-styles-pm',
              )}
            >
              <div className="profile-common-styles-few g-box-center-between">
                <div>
                  Profile Overview
                  <span className="profile-index-color-text-2">
                    {' '}
                    {isTotalOverview && '(Finished)'}
                  </span>
                </div>
                {!isTotalOverview && isNeedMetrics && (
                  <Tooltip
                    title={overviewInfo?.metrics ? undefined : 'No Metrics'}
                  >
                    <Button
                      disabled={!overviewInfo?.metrics}
                      onClick={() => setMetriesVisible(true)}
                      type="primary"
                      size="small"
                    >
                      <Space size={4}>
                        {overviewInfo?.metrics ? (
                          <DatabendIcon icon="databend-icon-yulan-dakai_preview-open"></DatabendIcon>
                        ) : (
                          <DatabendIcon icon="databend-icon-yulan-guanbi_preview-close-one"></DatabendIcon>
                        )}
                        Metrics
                      </Space>
                    </Button>
                  </Tooltip>
                )}
              </div>
              <div className="g-mt-8">
                {overviewInfo.isNode ? (
                  <>
                    <div className="g-t-right">
                      {overviewInfo?.totalTimePercent}
                    </div>
                    <ProgressPercent
                      data={[
                        {
                          color: 'rgb(28, 130, 242)',
                          percent: parseFloat(overviewInfo.cpuTimePercent),
                        },
                        {
                          color: 'rgb(255, 152, 0)',
                          percent: parseFloat(overviewInfo.waitTimePercent),
                        },
                      ]}
                    />
                  </>
                ) : (
                  <div className="profile-common-styles-bcpc">
                    <span>Total Execution Time</span>
                    <span className="profile-index-color-text-1">
                      <span className="profile-index-color-text-2">
                        (
                        {outValue
                          ? filterMillisecond(overviewInfo?.totalTime / 1000000)
                          : filterMillisecond(queryDuration)}
                        )
                      </span>{' '}
                      {overviewInfo?.totalTimePercent}
                    </span>
                  </div>
                )}
                <div className="profile-common-styles-bcpc">
                  <SimpleLegend
                    width={5}
                    text="CPU Time"
                    textClass="profile-index-color-text-2"
                  />
                  <span className="profile-index-color-text-1">
                    {overviewInfo?.cpuTimePercent}
                  </span>
                </div>
                <div className="profile-common-styles-bcpc">
                  <SimpleLegend
                    width={5}
                    roundColor="rgb(255, 152, 0)"
                    text="I/O Time"
                    textClass="profile-index-color-text-2"
                  />
                  <span className="profile-index-color-text-1">
                    {overviewInfo?.waitTimePercent}
                  </span>
                </div>
              </div>
            </div>

            {overviewInfo?.errors?.length > 0 && (
              <div
                className={clsx(
                  'profile-index-top-ranking',
                  'profile-index-top-ranking-errors',
                  'profile-common-styles-pm',
                )}
              >
                <div className="profile-common-styles-few g-color-text-danger">
                  {'Errors'}
                </div>
                {overviewInfo?.errors?.map((error, index) => {
                  return (
                    <div key={index} className="g-mt-10">
                      <div className="profile-index-color-text-1">
                        {error?._errorType}
                      </div>
                      <div className="profile-common-styles-gbp profile-index-color-text-2">
                        <div className="g-class-ellipsis">
                          message:
                          <CodeWithTooltip
                            placement="rightTop"
                            destroyTooltipOnHide
                            content={error?.message}
                            buttonText="message"
                          >
                            {error?.message}
                          </CodeWithTooltip>
                        </div>
                        <div className="g-class-ellipsis">
                          detail:
                          <Tooltip destroyTooltipOnHide title={error?.detail}>
                            {error?.detail}
                          </Tooltip>
                        </div>
                        <div className="g-class-ellipsis">
                          backtrace:
                          <CodeWithTooltip
                            placement="rightTop"
                            destroyTooltipOnHide
                            content={error?.backtrace}
                            buttonText="backtrace"
                          >
                            {error?.backtrace}
                          </CodeWithTooltip>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {filterStatisticsDescArray?.length > 0 && (
              <div
                className={clsx(
                  'profile-index-top-ranking',
                  'profile-common-styles-pm',
                )}
              >
                <div className="profile-common-styles-few">Statistics</div>
                <div className="g-mt-8">
                  {filterStatisticsDescArray?.map((statistic, index) => {
                    return (
                      <div key={index} className="profile-common-styles-bcpc">
                        <span>{statistic?.display_name}</span>
                        <span className="profile-index-color-text-1">
                          {formatValue(statistic.unit, statistic?._value)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {overviewInfo?.labels?.length > 0 && (
              <div
                className={clsx(
                  'profile-index-top-ranking',
                  'profile-common-styles-pm',
                )}
              >
                <div className="profile-common-styles-few">Attributes</div>
                {overviewInfo?.labels?.map((label, index) => {
                  return (
                    <div key={index} className="g-mt-10">
                      <div className="profile-index-color-text-1">
                        {label?.name}
                      </div>
                      <div>
                        <div className="profile-common-styles-gbp profile-index-color-text-2">
                          {label?.value?.map((value) => {
                            return (
                              <div
                                style={{ wordWrap: 'break-word' }}
                                key={value}
                              >
                                {value}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        {initLoading ? (
          <div className="g-box-c" style={{ height: '700px' }}>
            <ResetSpinLoading />
          </div>
        ) : (
          <>
            {plainData?.length > 0 ? (
              <CacheFlowAnalysisGraph
                queryId={queryId}
                plainData={plainData}
                graphSize={graphSize}
                graphSizeHeight={graphSizeHeight}
                graphRef={graphRef}
                isLight={isLight}
                handleResize={handleResize}
                overviewInfoCurrent={overviewInfoCurrent}
                onReady={(graph) => {
                  graphRef.current = graph;
                  graph.setMaxZoom(2);
                  // graph.setMinZoom(0.5);
                  graph.on('node:click', (evt) => {
                    setIsTotalOverView(false);
                    const modal = evt.item._cfg.model;
                    setOverInfo({
                      ...modal,
                      isNode: true,
                    });
                    const nodes = getAllNodes(graph);
                    const id = evt.item._cfg.id;
                    const node = nodes?.find((node) => node?._cfg.id === id);
                    nodes
                      ?.filter((node) => node._cfg.id !== id)
                      .forEach((n) => {
                        graph.clearItemStates(n);
                      });
                    setNodeActive(graph, node);
                  });
                  graph.on('node:mouseleave', () => {
                    if (!profileWrapRefCanvas.current) {
                      profileWrapRefCanvas.current =
                        document.getElementsByTagName('canvas')[0];
                    }
                    profileWrapRefCanvas.current.style.cursor = 'move';
                    resetToolTipInfo();
                  });
                  graph.on('node:mouseover', (e) => {
                    const name = e?.target?.cfg?.name;
                    if (name?.includes('percentage-output-text')) {
                      const { clientX, clientY } = e;
                      const outputRows = e?.item?._cfg?.model?.outputRows;
                      setTooltipInfo({
                        clientX: clientX - 70,
                        clientY: clientY - 52,
                        show: true,
                        text: `Output Rows: ${toThousands(outputRows)}`,
                      });
                    } else {
                      resetToolTipInfo();
                    }
                  });
                  graph.on('canvas:click', () => {
                    setActiveName('');
                    setIsTotalOverView(true);
                    setOverviewInfo(overviewInfoCurrent?.current);
                    clearNodeActive(graph);
                  });
                  graph.on('canvas:dragstart', () => {
                    profileWrapRef.current.style.userSelect = 'none';
                  });
                  graph.on('canvas:dragend', () => {
                    profileWrapRef.current.style.userSelect = 'unset';
                  });
                  graph.on('edge:mouseover', (e) => {
                    const type = e?.target?.cfg?.type;
                    const rows = e?.item?._cfg?.model?._value;
                    const { clientX, clientY } = e;
                    if (type === 'text') {
                      setTooltipInfo({
                        clientX: clientX - 40,
                        clientY: clientY - 50,
                        show: true,
                        text: `Rows: ${toThousands(rows)}`,
                      });
                    } else {
                      resetToolTipInfo();
                    }
                  });
                  graph.on('edge:mouseleave', () => {
                    resetToolTipInfo();
                  });
                }}
              />
            ) : (
              <div style={{ minHeight: '700px' }}>
                <NoResultWithAction
                  title="No Profile"
                  paddingTop="150px"
                  subTitle={
                    <div>
                      Some queries, such as those with{' '}
                      <span style={{ fontWeight: 700 }}>USE</span> and{' '}
                      <span style={{ fontWeight: 700 }}>DESCRIBE</span>{' '}
                      statements, have no query profile.
                    </div>
                  }
                  TopIcon={<DatabendIcon icon="databend-icon-zuzhijiagou" />}
                />
              </div>
            )}
          </>
        )}
      </div>
      <MetricsModal
        isLight={isLight}
        metricsData={overviewInfo?.metrics}
        title={`Metrics Details: ${overviewInfo?.name}[${overviewInfo?.id}]  ${overviewInfo?.totalTimePercent}`}
        onClose={() => setMetriesVisible(false)}
        visible={metriesVisible}
      />
    </>
  );
};
export default memo(QueryProfile);
