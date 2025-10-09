import { Tooltip } from 'antd';
import React, { FC, ReactElement, ReactNode } from 'react';
import CodeContent from '../CodeContent';
import styles from './styles.module.less';

interface IProps {
  content: string;
  children: ReactNode | ReactNode[];
  buttonText?: string;
  [key: string]: any;
}

const CodeWithTooltip: FC<IProps> = ({
  content,
  children,
  buttonText = 'Failed Text',
  ...props
}): ReactElement => {
  return (
    <Tooltip
      classNames={{
        root: styles.errorTip,
      }}
      styles={{
        body: { padding: 0 },
      }}
      title={
        <CodeContent buttonText={buttonText} content={content ? content : ''} />
      }
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default CodeWithTooltip;
