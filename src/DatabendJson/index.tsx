// Copyright 2024 DatabendLabs.
import React, { FC, ReactElement } from 'react';
import ReactJson, { ReactJsonViewProps } from 'react-json-view';

const DatabendJson: FC<ReactJsonViewProps> = ({ ...props }): ReactElement => {
  return (
    <ReactJson
      style={{
        padding: '10px',
        borderRadius: '4px',
      }}
      displayDataTypes={false}
      theme="ashes"
      {...props}
      src={props?.src || {}}
    />
  );
};
export default DatabendJson;
