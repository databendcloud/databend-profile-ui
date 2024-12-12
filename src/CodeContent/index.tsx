// Copyright 2022 Datafuse Labs.

import { Button, Space } from 'antd';
import clsx from 'clsx';
import React, { FC, ReactElement, ReactNode, useRef } from 'react';
import Highlight from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Copy from '../Copy';
import './styles.less';
interface IProps {
  copyText?: string;
  content: string;
  buttonText?: string;
  isString?: boolean;
  height?: number | 'auto';
  CustomArea?: ReactNode;
  isBreakLine?: boolean;
}
const CodeContent: FC<IProps> = ({
  content,
  buttonText,
  isString,
  height,
  copyText,
  CustomArea,
  isBreakLine,
}): ReactElement => {
  const containerRef = useRef(null);
  const inner = isString
    ? content
    : JSON.stringify(JSON.parse(content), null, 2);
  return (
    <div
      style={{ height: height + 'px' }}
      className={'db-code-content-container'}
    >
      {buttonText && (
        <Button
          className="db-code-content-button-text"
          style={{
            top: 0,
            left: '20px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
          type="primary"
        >
          {buttonText}
        </Button>
      )}
      <div className={'db-code-content-copy'}>
        <Space>
          {CustomArea && CustomArea}
          <Copy
            className="db-code-content--button"
            copyText={copyText || content}
            containerRef={containerRef}
          ></Copy>
        </Space>
      </div>

      <div
        className={clsx(
          'db-code-content-block',
          isBreakLine && 'db-code-content-break-line',
        )}
        style={{ fontWeight: 500, whiteSpace: 'pre-wrap' }}
        ref={containerRef}
      >
        <Highlight style={okaidia}>{inner}</Highlight>
      </div>
    </div>
  );
};
CodeContent.defaultProps = {
  buttonText: 'Meta data',
  isString: true,
  height: 'auto',
  isBreakLine: false,
};
export default CodeContent;
