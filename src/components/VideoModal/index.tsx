'use client';

import { useState } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { LocaleComponentProps } from '@/types';
import { Button } from '@UI';

import styles from './styles.module.scss';

const { button, content, modal, video, backdrop } = styles;

const Modal = ({ lng }: LocaleComponentProps) => {
  const { t } = useTranslation(lng, 'header');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className={button}>
        <Button onClick={toggleModal}>{t('videoButton')}</Button>
      </div>
      {isVisible && (
        <div onClick={toggleModal} className={modal}>
          <div className={content}>
            <iframe
              src="https://www.youtube.com/embed/Z-pT0XDYvDM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="video about us"
              className={video}
            />
          </div>
          <div className={backdrop} />
        </div>
      )}
    </>
  );
};

export default Modal;
