import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

interface DeviceType {
  type: 'mobile' | 'pc';
  isPhone: boolean;
}

function isMobile(UA: string) {
  return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

function getDeviceType(width = 850): DeviceType {
  let type: DeviceType['type'] = 'pc';
  const defaultDeviceType: DeviceType = { type, isPhone: false };
  const screenWidth = window.innerWidth;
  const UA = navigator.userAgent ?? '';
  if (isMobile(UA) || screenWidth <= width) {
    type = 'mobile';
    return {
      type,
      isPhone: true,
    };
  } else {
    return defaultDeviceType;
  }
}

export function useDeviceType(width = 850) {
  const [deviceType, setDeviceType] = useState<DeviceType>(
    getDeviceType(width),
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      const newDeviceType = getDeviceType(width);
      setDeviceType(newDeviceType);
    }, 200); // 调整等待时间以满足您的需求

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
}
