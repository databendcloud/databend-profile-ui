import { LoadingOutlined } from '@ant-design/icons';
import { Spin, SpinProps } from 'antd';
import React, { FC, ReactElement } from 'react';
interface IProps extends SpinProps {
  spinning?: boolean;
  className?: string;
}
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const SpinLoading: FC<IProps> = ({
  className,
  children,
  ...props
}): ReactElement => {
  return (
    <Spin
      style={{ zIndex: 2000 }}
      className={className}
      {...props}
      indicator={antIcon}
    >
      {children}
    </Spin>
  );
};
export default SpinLoading;
