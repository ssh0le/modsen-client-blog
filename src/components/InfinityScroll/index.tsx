'use client';

import { useRef, useState } from 'react';

import { InfinityScrollProps } from './interfaces';

const InfinityScroll = ({ children, margin = '80px' }: InfinityScrollProps) => {
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = (node: HTMLDivElement) => {
    const observer = observerRef.current;
    if (observer) observer.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && currentBlock < children.length) {
          setCurrentBlock((prevCurrentBlock) => prevCurrentBlock + 1);
        }
      },
      { threshold: 1, rootMargin: margin },
    );
    if (node) {
      observerRef.current.observe(node);
    }
  };

  return (
    <>
      {children.slice(0, currentBlock).map((block) => block)}
      {currentBlock < children.length && <div ref={setRef}></div>}
    </>
  );
};

export default InfinityScroll;
