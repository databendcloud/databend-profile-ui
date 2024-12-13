// Copyright 2023 DatabendLabs.
import { Button, Input, Space } from 'antd';
import { isValidJSON } from 'databend-profile-ui/utils/tools';
import React, { FC, ReactElement, useState } from 'react';
import QueryProfile from '.';
import DatabendIcon from '../DatabendIcon';
import { DEMO } from './demo';
import './styles.less';
const { TextArea } = Input;

interface TestProfileProps {
  isDemo?: boolean;
}
const TestProfile: FC<TestProfileProps> = ({
  isDemo = false,
}): ReactElement => {
  const [value, setValue] = useState<any | undefined>('');
  const [queryId, setQueryId] = useState('');
  const [count, setCount] = useState(0);
  const [selfHidden, setSelfHidden] = useState(false);
  function show() {
    setCount(count + 1);
    try {
      setQueryId(JSON.parse(value)?.query_id);
    } catch (error) {}
  }
  return (
    <div
      className="g-pa-24 g-align-s site-layout-right"
      style={{ gap: '12px' }}
    >
      <Space size={12} className="g-pl-10 g-pr" direction="vertical">
        {!selfHidden && (
          <>
            <TextArea
              placeholder="请把你生成的 profile 日志json粘进来"
              className="g-border-radius-middle g-border g-color-bg-1"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              style={{ width: '320px', height: 'calc(100vh - 100px)' }}
            ></TextArea>
            <Space className="g-box-center-between">
              <Space>
                <Button type="link" href="/">
                  Back
                </Button>
                <Button
                  type="dashed"
                  onClick={() => {
                    setValue(DEMO);
                    show();
                  }}
                >
                  Demo
                </Button>
              </Space>
              <Space>
                <Button
                  disabled={!value}
                  type="primary"
                  onClick={() => setCount(count + 1)}
                >
                  Show
                </Button>
                <Button
                  onClick={() => {
                    setValue('');
                  }}
                >
                  Clear
                </Button>
              </Space>
            </Space>
          </>
        )}
        <Button
          style={{
            position: 'fixed',
            bottom: '80px',
            left: '10px',
            zIndex: 10,
          }}
          type="primary"
          onClick={() => {
            setSelfHidden(!selfHidden);
          }}
          icon={
            <DatabendIcon
              icon={
                selfHidden
                  ? 'databend-icon-zhankai_expand-left'
                  : 'databend-icon-zhankai_expand-right'
              }
            ></DatabendIcon>
          }
        ></Button>
      </Space>

      <div className="g-pa-6 g-color-bg-1 g-box-flex g-border-radius-middle">
        <QueryProfile
          offsetWidth={
            isDemo ? (selfHidden ? 900 : 1200) : selfHidden ? 100 : 695
          }
          offsetHeight={60}
          countShow={count}
          outValue={value && isValidJSON(value) ? JSON.parse(value) : ''}
          showTextArea={selfHidden}
          queryId={queryId}
          queryDuration={0}
          profileRef={document?.body}
        />
      </div>
    </div>
  );
};
export default TestProfile;
