'use client';

import emailjs from '@emailjs/browser';
import { useTranslation } from '@i18n/client';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

import { config, emailSchema } from '@/constants';
import { useForm } from '@/hooks/useForm';
import { LocaleComponentProps } from '@/types';
import { Button, CustomText, ErrorWrapper } from '@UI';

import styles from './styles.module.scss';

const { emailKey, emailServiceId, subscribeEmailTemplateId } = config;

const { input, form: formStyle } = styles;

const SubscribeForm = ({ language }: LocaleComponentProps) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const { t } = useTranslation(language, 'footer');
  const formRef = useRef<HTMLFormElement | null>(null);
  const { errors, handleSubmit, dispatch, formParams } = useForm(
    { email: '' },
    emailSchema,
  );

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = formRef.current;
    if (form) {
      handleSubmit(() => {
        emailjs
          .sendForm(emailServiceId, subscribeEmailTemplateId, form, emailKey)
          .then(() => setIsSubscribed(true))
          .catch((err) => console.log(err));
      });
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ name: 'email', value: event.target.value });
  };

  if (isSubscribed) {
    return <CustomText color="yellow">{t('subscribedMessage')}</CustomText>;
  }

  return (
    <form className={formStyle} ref={formRef} onSubmit={handleFormSubmit}>
      <ErrorWrapper error={errors.email}>
        <input
          className={input}
          value={formParams.email}
          onChange={handleEmailChange}
          name="subscribeEmail"
          type="text"
          placeholder={t('placeholder')}
        />
      </ErrorWrapper>
      <Button type="submit" styleType="colored">
        {t('subscribeButton')}
      </Button>
    </form>
  );
};

export default SubscribeForm;
