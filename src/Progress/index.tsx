// Copyright 2022 Datafuse Labs.
import { ICommonProps } from '../types';
import React, { FC, memo, ReactElement } from 'react';
import './styles.less';
const ProgressBar: FC<ICommonProps> = (props): ReactElement=> {
  return (
    <div {...props} className={'db-progress-bar'}></div>
  );
};
export default memo(ProgressBar);