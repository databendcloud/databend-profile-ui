// Copyright 2022 Datafuse Labs.
import clsx from 'clsx';
import React, { FC, ReactElement, ReactNode } from 'react';
import { ICommonProps } from '../types';
import './styles.less';
interface IProps extends ICommonProps {
  text: ReactNode;
  roundColor?: string;
  width?: number;
  textClass?: string;
  gap?: number;
  wrapClass?: string;
  isInnerHtml?: boolean;
}
const SimpleLegend: FC<IProps> = ({
  text = '0',
  roundColor = '#1C82F2',
  width = 12,
  className,
  textClass,
  gap = 8,
  wrapClass = 'db-simple-legend-default',
  isInnerHtml = false,
}): ReactElement => {
  return (
    <span className={wrapClass} style={{ gap: gap + 'px' }}>
      <span
        style={{
          backgroundColor: roundColor,
          width: width + 'px',
          height: width + 'px',
          borderRadius: '50%',
          minWidth: '1px',
        }}
        className={clsx('db-simple-inline-block', className)}
      ></span>
      {text !== undefined && text !== '' && (
        <>
          {isInnerHtml ? (
            <span
              style={{ flex: 1 }}
              className={clsx('db-simple-legend-text', textClass)}
              dangerouslySetInnerHTML={{ __html: text as string }}
            />
          ) : (
            <span
              style={{ flex: 1 }}
              className={clsx('db-simple-legend-text', textClass)}
            >
              {text}
            </span>
          )}
        </>
      )}
    </span>
  );
};

export default SimpleLegend;
