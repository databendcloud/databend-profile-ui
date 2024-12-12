// Copyright 2022 Datafuse Labs.
import { Button } from 'antd';
import clsx from 'clsx';
import copy from 'copy-to-clipboard';
import React, {
  FC,
  memo,
  MutableRefObject,
  ReactElement,
  useState,
} from 'react';
import { ICommonProps } from '../types';
interface IProps extends ICommonProps {
  containerRef?: MutableRefObject<any>;
  copyText?: string;
}

const Copy: FC<IProps> = ({
  containerRef,
  className,
  copyText,
}): ReactElement => {
  const TEXT = '复制';
  const TEXTED = '已复制';
  const [text, setText] = useState(TEXT);

  const copyCode = () => {
    setText(TEXTED);
    if (copyText) {
      copy(copyText);
    } else {
      if (containerRef) {
        copy(containerRef?.current?.innerText as string);
      }
    }
  };
  return (
    <>
      <Button
        onMouseLeave={() => setText(TEXT)}
        onClick={() => copyCode()}
        className={clsx(className)}
        type="primary"
      >
        {text}
      </Button>
    </>
  );
};
export default memo(Copy);
