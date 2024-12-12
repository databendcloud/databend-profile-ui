// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement, ReactNode } from 'react';
import './styles.less';
import clsx from 'clsx';
interface IProps {
  position: {
    x: number;
    y: number;
  };
  title: ReactNode;
}
const DatabendTooltip: FC<IProps> = ({ position, title }): ReactElement => {
  return (
    <div
      style={{ left: position.x + 'px', top: position.y + 'px' }}
      className={clsx('databend-self-tooltip')}
    >
      {title}
    </div>
  );
};
export default DatabendTooltip;
