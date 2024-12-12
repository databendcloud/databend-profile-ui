// Copyright 2022 Datafuse Labs.
import { Button, ButtonProps } from 'antd';
import clsx from 'clsx';
import React, { FC, ReactElement, ReactNode } from 'react';
import { ICommonProps } from '../../types';
import './styles.less';
interface IProps extends ICommonProps, ButtonProps {
  children?: ReactNode | ReactNode[];
}
const ButtonWhite: FC<IProps> = ({ children, ...props }): ReactElement => {
  return (
    <Button
      {...props}
      className={clsx(props.className, 'db-reset-white-button')}
      style={{ gap: '6px', ...props?.style }}
    >
      {children}
    </Button>
  );
};
export default ButtonWhite;
