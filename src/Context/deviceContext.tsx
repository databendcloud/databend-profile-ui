import React, {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import { useDeviceType } from '../hooks/useDeviceType';
// 创建一个 Context
const MyContext = createContext({ type: 'pc', isPhone: false });
// 创建一个提供者组件
interface IProps {
  children?: ReactNode | ReactNode[];
}
const DeviceContextProvider: FC<IProps> = ({ children }): ReactElement => {
  const deviceType = useDeviceType();
  return <MyContext.Provider value={deviceType}>{children}</MyContext.Provider>;
};

export default DeviceContextProvider;
// 自定义 hook 用于方便地访问 context
export const useDeviceContextProvider = () => {
  return useContext(MyContext);
};
