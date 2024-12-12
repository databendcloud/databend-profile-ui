// Copyright 2024 DatabendLabs.
import React, { FC, ReactElement } from 'react';
// import styles from './styles.module.less';
import { message } from 'antd';
import copy from 'copy-to-clipboard';
import DatabendIcon from '../DatabendIcon';
interface SimpleCopyProps {
  text: string;
}
const SimpleCopy: FC<SimpleCopyProps> = ({ text }): ReactElement => {
  return (
    <DatabendIcon
      onClick={() => {
        message.destroy();
        copy(text);
        message.success('Copied');
      }}
      icon="databend-icon-fuzhi_copy"
    ></DatabendIcon>
  );
};
export default SimpleCopy;
