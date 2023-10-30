'use client';

import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { Button } from '@/components/UI';
import { config } from '@/constants';
import { LocaleComponentProps } from '@/types';

import styles from './styles.module.scss';

const { emailKey, emailServiceId, subscribeEmailTemplateId } = config;

const { input, form } = styles;

const SubscribeForm = ({ lng }: LocaleComponentProps) => {
  const { t } = useTranslation(lng, 'footer');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('sending');
    const form = formRef.current;
    if (form) {
      emailjs
        .sendForm(emailServiceId, subscribeEmailTemplateId, form, emailKey)
        .then((ans) => console.log(ans))
        .catch((err) => console.log(err));
    }
  };

  return (
    <form className={form} ref={formRef} onSubmit={handleFormSubmit}>
      <input
        className={input}
        name="userEmail"
        type="text"
        placeholder={t('placeholder')}
      />
      <Button type="submit" styleType="colored">
        {t('subscribeButton')}
      </Button>
    </form>
  );
};

export default SubscribeForm;
