// Copyright 2023 DatabendLabs.
import React, { FC, ReactElement, memo, useEffect, useState } from 'react';
interface IProps {
  data: {
    color: string;
    percent: number;
  }[]
}
const ProgressPercent: FC<IProps> = ({data}): ReactElement=> {
  const [gradient, setGradient] = useState('');
  useEffect(()=> {
    if (data?.length) {
      let gradient = 'linear-gradient(90deg';
      let cumulativePercent = 0;
      data.forEach(item => {
        gradient += `, ${item.color} ${cumulativePercent}%`;
        cumulativePercent += item.percent;
        gradient += `, ${item.color} ${cumulativePercent}%`;
      });
      gradient += ')';
      setGradient(gradient);
    }
    
  }, [data]);
  return (
    <>
      {
        gradient && 
        <div style={{
          height: '8px',
          borderRadius: '4px',
          backgroundImage: gradient
        }}>
        </div>
      }
    </>
  );
};
export default memo(ProgressPercent);