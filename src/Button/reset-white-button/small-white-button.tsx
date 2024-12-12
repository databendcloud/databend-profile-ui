// Copyright 2023 Datafuse Labs.
import React, { FC, ReactElement } from 'react';
import 'styles.less';
import { ICommonProps } from '../../types';
interface IProps extends ICommonProps {
  onClick?: () => void;
}
const SmallWhiteButton: FC<IProps> = ({ children, onClick }): ReactElement => {
  return (
    <div onClick={onClick} className="db-small-white-button">
      {children}
    </div>
  );
};
export default SmallWhiteButton;
