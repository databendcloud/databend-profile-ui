// Copyright 2022 Datafuse Labs.
import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';
import { ICommonProps } from '../types';
import './styles.less';
interface IProps extends ICommonProps {
  padding?: number | [number, number, number, number];
  borderRadius?: number;
  isNeedBorder?: boolean;
  height?: number | 'auto';
  isJader?: boolean; // 是否有锯齿
  [key: string]: any;
}
const CardWrap: FC<IProps> = ({
  padding,
  borderRadius,
  children,
  className,
  isNeedBorder,
  isJader,
  onClick,
  height,
  ...props
}): ReactElement => {
  const p = padding === undefined ? [20, 20, 20, 20] : padding;
  const isArray = Array.isArray(p);
  return (
    <div
      onClick={onClick}
      className={clsx(
        'db-card-wrap-out',
        className,
        isNeedBorder && 'db-card-wrap-border',
        isJader && 'db-card-wrap-jader',
      )}
      style={{
        ...(isArray
          ? {
              paddingTop: p[0] + 'px',
              paddingRight: p[1] + 'px',
              paddingBottom: p[2] + 'px',
              paddingLeft: p[3] + 'px',
            }
          : { padding: padding + 'px' }),
        height: height === 'auto' ? 'auto' : height + 'px',
        borderRadius: `${borderRadius}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
CardWrap.defaultProps = {
  padding: [20, 20, 20, 20],
  borderRadius: 6,
  isNeedBorder: true,
  height: 'auto',
  isJader: false,
};
export default CardWrap;
