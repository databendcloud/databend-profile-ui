// Copyright 2022 Datafuse Labs.
import { Button, Space } from 'antd';
import React, { FC, memo, ReactElement, ReactNode } from 'react';
import SpinLoading from '../Loading/SpinLoading';
import './index.less';
interface IPros {
  TopIcon?: ReactNode;
  title: string;
  subTitle?: string | ReactNode;
  buttonText?: string;
  buttonArea?: ReactNode;
  onButtonClick?: (e?: any) => void;
  loading?: boolean;
  width?: string;
  paddingTop?: string;
}
const NoResultWithAction: FC<IPros> = ({
  onButtonClick,
  title,
  subTitle,
  buttonText,
  buttonArea,
  loading = false,
  width = '360px',
  paddingTop = '66px',
  TopIcon,
}): ReactElement => {
  const _subTitle =
    subTitle ||
    'There is no related resource, you can try to refresh or create a new resource';
  return (
    <SpinLoading spinning={loading}>
      <div className={'profile-no-result-with-action'} style={{ paddingTop }}>
        <div style={{ width }} className="profile-no-result-with-action-wrap">
          <Space
            direction="vertical"
            className="profile-no-result-with-action-content"
            size={12}
          >
            {TopIcon && (
              <Button className="pointer-events-none" icon={TopIcon} />
            )}
            <div className="profile-no-result-with-action-title">{title}</div>
            {subTitle !== null && (
              <div className="profile-no-result-with-action-sub-title">
                {_subTitle}
              </div>
            )}
            {buttonArea ? (
              <>{buttonArea}</>
            ) : (
              <>
                {buttonText && (
                  <Button
                    onClick={(e) => onButtonClick && onButtonClick(e)}
                    type="primary"
                  >
                    {buttonText}
                  </Button>
                )}
              </>
            )}
          </Space>
        </div>
      </div>
    </SpinLoading>
  );
};
export default memo(NoResultWithAction);
