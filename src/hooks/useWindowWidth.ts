'use client';

import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }
    const eventName = 'resize' as const;

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener(eventName, handleWindowResize);

    return () => window.removeEventListener(eventName, handleWindowResize);
  }, []);

  return width;
};
