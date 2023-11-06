'use client';

import { useTranslation } from '@i18n/client';
import { useState } from 'react';

import { config, videoTitle } from '@/constants';
import { LocaleComponentProps } from '@/types';
import { Button } from '@UI';

import styles from './styles.module.scss';

const { content, modal, video, backdrop } = styles;

const Modal = ({ language }: LocaleComponentProps) => {
  const { t } = useTranslation(language, 'header');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleModal}>{t('videoButton')}</Button>
      {isVisible && (
        <div onClick={toggleModal} className={modal}>
          <section className={content}>
            <iframe
              src={config.blogVideoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videoTitle}
              className={video}
            />
          </section>
          <div className={backdrop} />
        </div>
      )}
    </>
  );
};

export default Modal;
