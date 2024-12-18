// Copyright 2024 DatabendLabs.
import { FC, ReactElement } from "react";
import ReactJson, { ReactJsonViewProps } from "react-json-view";

const DatabendJson: FC<ReactJsonViewProps> = ({ ...props }): ReactElement => {
  return (
    <ReactJson
      style={{
        padding: "10px",
        borderRadius: "4px",
      }}
      src={props?.src}
      displayDataTypes={false}
      theme="ashes"
      {...props}
    />
  );
};
export default DatabendJson;
