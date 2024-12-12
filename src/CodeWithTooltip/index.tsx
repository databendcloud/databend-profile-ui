import React, { FC, ReactElement, ReactNode } from 'react';
import styles from './styles.module.less';
import { Tooltip } from 'antd';
import CodeContent from '../CodeContent';

interface IProps {
  content: string;
  children: ReactNode | ReactNode[];
  buttonText?: string;
  [key: string]: any;
}

const CodeWithTooltip: FC<IProps> = ({ content, children, buttonText, ...props }): ReactElement => {
  return (
    <Tooltip
      overlayClassName={styles.errorTip}
      overlayInnerStyle={{ padding: 0 }}
      title={<CodeContent buttonText={buttonText} content={content ? content : ''} />}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

CodeWithTooltip.defaultProps = {
  buttonText: 'Failed Text',
};

export default CodeWithTooltip;
