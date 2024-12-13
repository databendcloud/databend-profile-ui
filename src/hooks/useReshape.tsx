import { useUnmount } from 'ahooks';
import { bind } from 'size-sensor';

export function useReshape() {
  let bindChartResize: any = null;
  useUnmount(() => {
    if (bindChartResize) {
      bindChartResize();
    }
  });
  function reshape(myChart: any, dom = 'body') {
    bindChartResize = bind(document?.querySelector(dom) as HTMLElement, () => {
      myChart.resize({
        animation: {
          duration: 300,
          easing: 'cubicInOut',
        },
      });
    });
  }

  function reshapeDOM(callback: () => void, dom = 'body') {
    bindChartResize = bind(document?.querySelector(dom) as HTMLElement, () => {
      callback();
    });
  }
  return {
    reshape,
    reshapeDOM,
  };
}
