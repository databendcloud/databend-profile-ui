// Copyright 2024 DatabendLabs.
import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';
import './styles.less';
interface IProps {
  icon?: string;
  className?: string;
  onClick?: (event: any) => void;
  style?: any;
  size?: number;
}
const DatabendIcon: FC<IProps> = ({
  icon = 'databend-icon-xihuan_like',
  className,
  onClick,
  style,
  size = 18,
}): ReactElement => {
  return (
    <span className="g-box-c">
      <i
        onClick={(e) => onClick && onClick(e)}
        className={clsx('databend-icon-v2', icon, className)}
        style={{ ...style, fontSize: size + 'px' }}
      ></i>
    </span>
  );
};
export default DatabendIcon;
