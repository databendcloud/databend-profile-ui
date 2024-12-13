// Copyright 2024 DatabendLabs.
// @ts-nocheck
import { Col, Collapse, Drawer, DrawerProps, Row, Space, Table } from 'antd';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import WhiteButton from '../Button/reset-white-button';
import CardWrap from '../CardWrap';
import CodeContent from '../CodeContent';
import DatabendIcon from '../DatabendIcon';
import MetriesChart from './metries-chart';
import './styles.less';
const { Panel } = Collapse;

interface IMetrics {
  columns?: any[];
  data: any[][];
  labelsArr?: any[];
  name: string;
  type: string;
  value: any;
  _tag: string;
}

function getTag(labels, defaultLabel = '') {
  return labels
    ? Object.values(labels)
        ?.sort((a, b) => (a as string)?.localeCompare(b as string))
        .join(' ')
    : defaultLabel || 'No labels';
}

function transformData(dataArray) {
  return dataArray.map((item) => {
    // 检查 labels 是否存在，不存在或 valueKey 为 Histogram 则 columns 和 data 为 null
    // 处理 Histogram 和 Summary 类型的数据
    const valueKey = Object.keys(item.value)[0]; // 提前获取 value 的 key
    const isHistogram = valueKey === 'Histogram';
    const isSummary = valueKey === 'Summary';
    const isChart = isHistogram || isSummary;
    if (!item.labels && !isChart) {
      return {
        name: item.name,
        columns: [
          {
            title: valueKey,
            key: valueKey,
            dataIndex: valueKey,
          },
        ],
        data: [
          {
            [valueKey]: item.value[valueKey],
          },
        ],
        labels: item.labels ? item.labels : null,
        value: item.value,
      };
    }
    if (isChart) {
      const chartData = isHistogram ? item.value.Histogram : item.value.Summary;
      let columns = [];
      let data = [];
      columns = chartData.map((entry) =>
        isHistogram ? entry.less_than : entry.quantile,
      );
      // 生成 data：对应的 count 值
      data = chartData.map((entry) => entry.count);
      return {
        isChart: true,
        name: item.name,
        _tag: getTag(item.labels, item.name),
        columns: columns,
        data: [data],
        labels: item.labels,
        value: item.value,
        type: valueKey,
      };
    }

    // 处理 labels 和 value，构建 columns 和 data
    const labelsKeys = Object.keys(item.labels);
    const columns = labelsKeys
      .map((key) => ({
        title: key,
        key: key,
        dataIndex: key,
      }))
      .concat({
        title: valueKey,
        key: valueKey,
        dataIndex: valueKey,
      });
    const data = [
      {
        ...item.labels,
        [valueKey]: item.value[valueKey],
      },
    ];

    return {
      name: item.name,
      columns: columns,
      data: data,
      labels: item.labels,
      value: item.value,
    };
  });
}

function mergeDataWithNewLogic(items) {
  const merged = {};
  items.forEach((item) => {
    if (!merged[item.name]) {
      // 如果这个 name 第一次出现，直接使用这个 item
      // merged[item.name] = { ...item };
      merged[item.name] = {
        ...item,
        labelsArr: [
          {
            ...item.labels,
            _tag: getTag(item.labels, item.name),
          },
        ],
      };
      delete merged[item.name].labels; // 删除原始的 labels 属性，因为我们会使用 labelsArr
    } else {
      // 检查是否有 type 属性，如果有，进行特殊处理
      if (item?.type) {
        // 直接合并二维数组
        merged[item.name].data = [...merged[item.name].data, ...item.data];
        // 合并 labels 到 labelsArr 数组中
        merged[item.name].labelsArr.push({
          ...item.labels,
          _tag: getTag(item.labels, item.name),
        });
      } else {
        // 如果没有 type 属性，就简单合并 data 数组
        merged[item.name].data.push(...item.data);
      }
    }
  });

  return Object.values(merged);
}

function dealsData(data) {
  return data?.map((d) => {
    return {
      machine: d[0],
      data: mergeDataWithNewLogic(
        transformData(d[1])
          .sort((a, b) => {
            if (a?.name === b?.name) {
              return b?._tag?.localeCompare(a?._tag);
            }
            return 0;
          })
          .sort((a, b) => {
            if (!a?.type && !b?.type) return 0;
            if (!a?.type) return -1;
            if (!b?.type) return 1;
            return a.type.localeCompare(b?.type);
          }),
      ),
    };
  });
}

interface IProps extends DrawerProps {
  metricsData: any[];
}
const MetricsModal: FC<IProps> = ({ metricsData, ...props }): ReactElement => {
  const [isJson, setIsJson] = useState(false);
  const [haveDealDatas, setHaveDealDatas] = useState([]);
  useEffect(() => {
    if (metricsData) {
      const data = Object.entries(metricsData);
      const haveDealDatas = dealsData(data);
      setHaveDealDatas(haveDealDatas);
    }
  }, [metricsData]);
  return (
    <Drawer
      destroyOnClose
      width={'100vw'}
      {...props}
      title={
        <Space>
          <span>{props?.title}</span>
          <WhiteButton onClick={() => setIsJson(!isJson)}>
            <Space size={4}>
              <DatabendIcon
                size={14}
                icon="databend-icon-qiehuan_switch"
              ></DatabendIcon>
              {isJson ? 'Chart View' : 'Metrics JSON'}
            </Space>
          </WhiteButton>
        </Space>
      }
    >
      <>
        {isJson ? (
          <CodeContent
            buttonText="Metrics"
            isString={false}
            content={JSON.stringify(metricsData)}
          />
        ) : (
          <Collapse
            className={'profile-metrics-collapseWrap'}
            expandIconPosition="start"
            defaultActiveKey={Array.from(
              { length: haveDealDatas?.length + 1 },
              (_, i) => i,
            )}
          >
            {haveDealDatas?.map((out, index) => {
              const len = out?.data?.length;
              const isOdd = len % 2 !== 0;
              return (
                <Panel
                  key={index}
                  header={
                    <div className="profile-metrics-header">
                      Machine {index + 1}:{out?.machine}
                    </div>
                  }
                >
                  <Row gutter={[16, 16]} className="profile-metrics-row">
                    {out?.data.map((item: IMetrics, index) => {
                      return (
                        <Col
                          {...{
                            xl: 12,
                            xxl: 12,
                            lg: 24,
                            md: 24,
                            sm: 24,
                            xs: 24,
                          }}
                          className="profile-metrics-col"
                          span={isOdd && len - 1 === index ? 24 : 12}
                          key={index}
                        >
                          <div className="profile-metrics-name">
                            {item?.name}
                          </div>
                          {item?.data ? (
                            <>
                              {item?.type ? (
                                <MetriesChart
                                  series={item?.data?.map((d, index) => {
                                    return {
                                      type: 'bar',
                                      data: d,
                                      name: item?.labelsArr[index]?._tag,
                                    };
                                  })}
                                  legendData={item?.labelsArr?.map(
                                    (item) => item?._tag,
                                  )}
                                  xData={item?.columns}
                                />
                              ) : (
                                <Table
                                  key={'key'}
                                  className="profile-metrics-table"
                                  pagination={false}
                                  dataSource={item?.data}
                                  columns={item?.columns}
                                />
                              )}
                            </>
                          ) : (
                            <CardWrap>{JSON.stringify(item?.value)}</CardWrap>
                          )}
                        </Col>
                      );
                    })}
                  </Row>
                </Panel>
              );
            })}
          </Collapse>
        )}
      </>
    </Drawer>
  );
};
export default MetricsModal;
