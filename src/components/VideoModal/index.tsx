'use client';

import { useState } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { config, videoTitle } from '@/constants';
import { LocaleComponentProps } from '@/types';
import { Button } from '@UI';

import styles from './styles.module.scss';

const { content, modal, video, backdrop } = styles;

const Modal = ({ lng }: LocaleComponentProps) => {
  const { t } = useTranslation(lng, 'header');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleModal}>{t('videoButton')}</Button>
      {isVisible && (
        <section onClick={toggleModal} className={modal}>
          <div className={content}>
            <iframe
              src={config.blogVideoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videoTitle}
              className={video}
            />
          </div>
          <div className={backdrop} />
        </section>
      )}
    </>
  );
};

export default Modal;
