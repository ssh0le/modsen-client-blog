'use client';

import { useState } from 'react';

import { CustomText } from '@/components/UI';

import { DropDownProps } from './interfaces';
import styles from './styles.module.scss';

const { wrapper, headingStyle, content, button, active } = styles;

const DropDown = ({ heading, children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <section className={wrapper}>
      <div className={headingStyle}>
        {heading}
        <div className={button} onClick={toggleMenu}>
          <CustomText color="purple" weight="900">
            {isOpen ? '-' : '+'}
          </CustomText>
        </div>
      </div>
      <div className={`${content} ${isOpen ? active : ''}`}>{children}</div>
    </section>
  );
};

export default DropDown;
