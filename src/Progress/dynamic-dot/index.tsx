import React, { FC, memo, ReactElement } from 'react';
import './index.less';
const DynamicDot: FC= (): ReactElement => {
  return (
    <span className={'db-dynamic-dot'}>. . .</span> 
  );
};
export default memo(DynamicDot);
