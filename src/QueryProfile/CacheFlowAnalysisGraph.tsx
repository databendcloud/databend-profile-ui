// Copyright 2024 DatabendLabs.
// https://ant-design-charts-v1.antgroup.com/
// @ts-nocheck
import { FlowAnalysisGraph } from '@ant-design/graphs';
import { isEqual } from 'lodash-es';
import React, { FC, memo, ReactElement } from 'react';
import DatabendIcon from '../DatabendIcon';
import { formatRows, getTextWidth } from '../utils/tools';
// import styles from './styles.module.less';
import './styles.less';
const OUTPUT_ROWS = 'OutputRows';
// 创建圆角矩形的路径
function createRoundedRectPath(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  return [
    ['M', x + radius, y],
    ['l', width - radius * 2, 0],
    ['a', radius, radius, 0, 0, 1, radius, radius],
    ['l', 0, height - radius * 2],
    ['a', radius, radius, 0, 0, 1, -radius, radius],
    ['l', -width + radius * 2, 0],
    ['a', radius, radius, 0, 0, 1, -radius, -radius],
    ['l', 0, -height + radius * 2],
    ['a', radius, radius, 0, 0, 1, radius, -radius],
    ['Z'],
  ];
}
const pathMoon = [
  ['M', 19.0374 + 2, 4 + 56],
  ['H', 13 + 2],
  ['C', 10.7909 + 2, 4 + 56, 9 + 2, 5.79086 + 56, 9 + 2, 8 + 56],
  ['C', 9 + 2, 10.2091 + 56, 10.7909 + 2, 12 + 56, 13 + 2, 12 + 56],
  ['H', 19.1059 + 2],
  [
    'C',
    17.8458 + 2,
    13.9437 + 56,
    15.7082 + 2,
    15.2309 + 56,
    13.2964 + 2,
    15.0062 + 56,
  ],
  ['C', 2.5 + 2, 14 + 56, -1 + 2, 13.5 + 56, 2 + 2, 7.5 + 56],
  ['C', -2.5 + 2, 1.00616 + 56, 9.5 + 2, 0.5 + 56, 13.2964 + 2, 1.00616 + 56],
  [
    'C',
    15.6724 + 2,
    1.00616 + 56,
    17.772 + 2,
    2.18999 + 56,
    19.0374 + 2,
    4 + 56,
  ],
  ['Z'],
];
const pathArrow = [
  ['M', 125.5, -18],
  ['L', 131.9952, -6.75],
  ['L', 119.00481, -6.75],
  ['L', 125.5, -18],
  ['Z'],
  ['M', 125.5, -1],
  ['L', 125.5, -7],
];

function mapEdgesLineWidth(edges: any) {
  if (edges?.length <= 2) return edges;
  // Define the minimum and maximum lineWidth
  const minLineWidth = 1;
  const maxLineWidth = 4.5;
  const values = edges
    .map((edge: any) => edge._value)
    .filter((_value: any) => _value !== undefined);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const mapValue = (
    _value: number,
    minValue: number,
    maxValue: number,
    minLineWidth: number,
    maxLineWidth: number,
  ) => {
    const normalizedValue = (_value - minValue) / (maxValue - minValue);
    return minLineWidth + (maxLineWidth - minLineWidth) * normalizedValue;
  };
  edges.forEach((edge: any) => {
    if (edge._value !== undefined) {
      edge.lineWidth = mapValue(
        edge._value,
        minValue,
        maxValue,
        minLineWidth,
        maxLineWidth,
      );
    } else {
      edge.lineWidth = minLineWidth;
    }
  });

  return edges;
}
function getDealData(plainData: any) {
  let outputRowsIndex = -1;
  plainData.sort((a: any, b: any) => Number(a?.id) - Number(b?.id));
  const data = plainData?.map((node: any) => {
    const { title, name, id, statisticsDescArray } = node;
    if (outputRowsIndex === -1) {
      outputRowsIndex =
        statisticsDescArray?.findIndex(
          (item: any) => item._type === OUTPUT_ROWS,
        ) || 0;
    }
    const outputRows = statisticsDescArray[outputRowsIndex]['_value'];
    return {
      ...node,
      id: id,
      outputRows,
      value: {
        title:
          (name?.length >= 26 ? name?.slice(0, 26) + '...' : name || '  ') +
          ` [${id}]`,
        items: [
          {
            text: title || '  ',
          },
        ],
      },
    };
  });
  return data;
}
function getEdges(plainData: any) {
  let outputRowsIndex = -1;
  plainData.sort((a: any, b: any) => Number(a?.id) - Number(b?.id));
  return plainData?.map((node: any) => {
    const statisticsDescArray = node?.statisticsDescArray;
    if (outputRowsIndex === -1) {
      outputRowsIndex =
        statisticsDescArray?.findIndex(
          (item: any) => item._type === OUTPUT_ROWS,
        ) || 0;
    }
    const outputRows = statisticsDescArray[outputRowsIndex]['_value'];
    const nodeInfo = {
      source: node?.parent_id,
      target: node?.id,
    };
    if (outputRows <= 0) {
      return nodeInfo;
    }
    return {
      ...nodeInfo,
      value: formatRows(outputRows),
      _value: outputRows,
    };
  });
}

const CacheFlowAnalysisGraph: FC<any> = ({
  plainData,
  graphSize,
  graphSizeHeight,
  graphRef,
  isLight,
  overviewInfoCurrent,
  onReady,
  queryId = 'analysis',
  onShare = undefined,
}): ReactElement => {
  const handleResetView = () => {
    const graph = graphRef?.current;
    if (graph) {
      graph.fitView();
      graph.refresh();
    }
  };
  const edgesWithLineWidth = mapEdgesLineWidth(getEdges(plainData));
  const data = {
    nodes: getDealData(plainData),
    edges: edgesWithLineWidth,
  };
  const containerSize = {
    width: graphSize,
    height: graphSizeHeight,
  };
  const config = {
    ...containerSize,
    autoFit: false,
    onReady,
    data,
    layout: {
      rankdir: 'TB',
      ranksepFunc: () => 20,
      sortBy: 'id',
    },
    tooltipCfg: {
      show: false,
    },
    toolbarCfg: {
      show: true,
      customContent: ({ zoomIn, zoomOut }: any) => {
        return (
          <div>
            {/* 切换全屏按钮 */}
            <span
              className="g-cursor g-box-c"
              onClick={() => handleResetView()}
            >
              <DatabendIcon
                size={16}
                icon="databend-icon-quanping1"
              ></DatabendIcon>
            </span>
            {/* 缩放按钮 */}
            <span className="g-cursor g-box-c" onClick={zoomOut}>
              <DatabendIcon
                size={16}
                icon="databend-icon-minus-bold"
              ></DatabendIcon>
            </span>
            <span className="g-cursor g-box-c" onClick={zoomIn}>
              <DatabendIcon size={16} icon="databend-icon-jia"></DatabendIcon>
            </span>
            <span
              className="g-cursor g-box-c"
              onClick={() =>
                graphRef?.current?.downloadFullImage(
                  `databend-profile-${queryId}`,
                  'image/png',
                )
              }
            >
              <DatabendIcon
                size={16}
                icon="databend-icon-xiazai_download-four"
              ></DatabendIcon>
            </span>
            {onShare && (
              <span
                className="g-cursor g-box-c"
                onClick={() => {
                  onShare?.();
                }}
              >
                <DatabendIcon
                  size={16}
                  icon="databend-icon-fenxiang_share-one"
                ></DatabendIcon>
              </span>
            )}
          </div>
        );
      },
    },
    nodeCfg: {
      padding: 10,
      size: [250, 40],
      title: {
        autoEllipsis: true,
        containerStyle: {
          fill: 'transparent',
        },
        style: (edge: any) => {
          return {
            fontWeight: 600,
            fill: edge?.errors?.length ? '#fff' : isLight ? '#000' : '#fff', //, mark
          };
        },
      },
      anchorPoints: [
        [0.5, 0],
        [0.5, 1],
      ],
      style: (edge: any) => {
        return {
          radius: 5,
          fill: edge?.errors?.length ? '#f73920' : isLight ? '#fff' : '#101', // , mark
          stroke: isLight ? '#ccc' : '#fff',
          filter: isLight
            ? 'drop-shadow(2px 2px 2px rgba(204, 204, 204, .3))'
            : 'drop-shadow(2px 3px 2px rgba(255, 255, 255, .2))',
        };
      },
      nodeStateStyles: {
        highlight: {
          stroke: '#2c91ff',
          lineWidth: 2,
        },
        hover: {
          stroke: '#2c91ff',
          lineWidth: 2,
        },
      },
      customContent: (item: any, group: any, cfg: any) => {
        const { startX, startY, width } = cfg;
        let { text } = item;
        text = text?.replace(/\n/g, ' ');
        const totalWidth = 230; // 总长度
        const textLength = text?.length;
        const model = group?.cfg?.item?._cfg?.model;
        const longRate =
          model?.totalTime / (overviewInfoCurrent.current?.totalTime || 1);
        const isExistedError = model?.errors?.length;
        const parentId = model?.parent_id;
        const textShape = group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            x: startX,
            y: startY,
            text,
            fill: isExistedError ? 'rgba(255,255,255,0.8)' : '#75767a', // mark
            textAlign: 'left',
          },
          // group 内唯一字段
          name: `text-${Math.random()}`,
        });

        const textWidth = textShape.getBBox().width;
        if (textLength > 26 && textWidth > width) {
          // 文本宽度超过容器宽度，进行省略处理
          const ellipsisText =
            text?.slice(0, Math.floor((width / textWidth) * textLength - 3)) +
            '...';
          textShape.attr('text', ellipsisText);
        }
        // 计算文本高度
        const textHeight = textShape?.getBBox().height ?? 0;

        // 进度条属性
        const height = 8; // 高度
        const borderRadius = 4; // 圆角半径
        const progressWidth = longRate * totalWidth; // 根据进度计算长度

        // 创建带圆角的进度条背景
        const backgroundPath = createRoundedRectPath(
          startX,
          startY + textHeight + 10,
          totalWidth,
          height,
          borderRadius,
        );
        group.addShape('path', {
          attrs: {
            path: backgroundPath,
            fill: '#f2f2f2',
          },
          name: `progress-bg-${Math.random()}`,
        });
        // 创建带圆角的进度条前景
        const foregroundPath = createRoundedRectPath(
          startX,
          startY + textHeight + 10,
          progressWidth,
          height,
          borderRadius,
        );
        group.addShape('path', {
          attrs: {
            path: foregroundPath,
            fill: progressWidth <= 0 ? 'rgba(0,0,0,0)' : 'rgb(1, 117, 246)',
          },
          name: `progress-fg-${Math.random()}`,
        });
        // mask
        if (progressWidth > 0 && progressWidth < 9) {
          group.addShape('path', {
            attrs: {
              path: pathMoon,
              fill: isExistedError ? '#f73920' : isLight ? '#fff' : '#101',
            },
            name: `circle-path-bg-${Math.random()}`,
          });
        }

        if (parentId === 'null') {
          const edgeObj = edgesWithLineWidth?.find(
            (edge: any) => edge?.source === 'null',
          );
          group.addShape('path', {
            attrs: {
              path: pathArrow,
              fill: '#ccc',
              stroke: '#ccc',
              lineWidth: edgeObj?.lineWidth || 1,
            },
            name: `percentage-output-text-${Math.random()}`,
          });
          const outputRowsFormat = formatRows(model?.outputRows);
          group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: 125 + getTextWidth(outputRowsFormat as string) / 2,
              y: -30,
              text: outputRowsFormat,
              fill: isLight ? 'rgba(12, 22, 43, 0.6)' : '#fff',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'right',
            },
            name: 'percentage-output-text',
          });
        }

        // 添加百分比文本
        const percentageText =
          longRate > 0 ? `${(longRate * 100).toFixed(1)}%` : '0%'; // 格式化百分比文本
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            x: startX + width, // 根据需要调整位置，确保在右上角
            y: startY - 27,
            text: percentageText,
            fill: isExistedError ? '#fff' : isLight ? '#000' : '#fff', // mark
            fontSize: 11,
            textAlign: 'right',
          },
          name: `percentage-text-${Math.random()}`,
        });
        return Math.max(textHeight, height);
      },
    },
    edgeCfg: {
      type: 'cubic-vertical', // vertical
      endArrow: false,
      style: (edge: any) => {
        const lineWidth = edge?.lineWidth || 1;
        return {
          lineWidth,
        };
      },
      label: {
        style: {
          fontWeight: 600,
          fill: isLight ? 'rgba(12, 22, 43, 0.6)' : '#fff',
        },
      },
      startArrow: {
        type: 'triangle',
      },
    },
    graphCfg: {
      containerStyle: {
        backgroundColor: '#f0f0f0',
      },
    },
    markerCfg: (cfg: any) => {
      return {
        animate: true,
        position: 'bottom',
        show: data.edges.filter((item: any) => item.source === cfg.id)?.length,
      };
    },
    behaviors: [
      'drag-canvas',
      {
        type: 'zoom-canvas',
        sensitivity: 0.15, // 设置缩放灵敏度
      },
    ], // 'drag-node'
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <FlowAnalysisGraph {...config} />;
};
export default memo(CacheFlowAnalysisGraph, (pre, next) => {
  const isPlainDataEqual = isEqual(pre.plainData, next.plainData);
  const isGraphSizeEqual = pre.graphSize === next.graphSize;
  const isGraphSizeHeightEqual = pre.graphSizeHeight === next.graphSizeHeight;
  const isLight = pre.isLight === next.isLight;
  return (
    isPlainDataEqual && isGraphSizeEqual && isGraphSizeHeightEqual && isLight
  );
});
