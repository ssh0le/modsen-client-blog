'use client';

import emailjs from '@emailjs/browser';
import { ChangeEvent, FormEvent, useState } from 'react';

import { useTranslation } from '@/app/i18n/client';
import { config, contactUsForm, queryTopicsEn } from '@/constants';
import { userSchema } from '@/constants/validation';
import { useForm } from '@/hooks/useForm';
import { ContactFormFields, LocaleComponentProps } from '@/types';

import { Button, InputField, Select } from '../UI';
import ErrorWrapper from '../UI/inputFields/ErrorWrapper';
import { InputArea } from '../UI/inputFields/InputArea';

import ResponseMessage from './ResponseMessage';
import styles from './styles.module.scss';
import { ResponseMessages, ResponseMessageStatus } from './types';

const { form } = styles;

const { emailKey, emailServiceId, supportEmailTemplateId } = config;

const ContactForm = ({ lng }: LocaleComponentProps) => {
  const { t } = useTranslation(lng, 'contact');

  const { errors, handleSubmit, dispatch, formParams } =
    useForm<ContactFormFields>(
      {
        userEmail: '',
        userName: '',
        queryTopic: '',
        message: '',
      },
      userSchema,
    );

  const [responseStatus, setResponseStatus] =
    useState<ResponseMessageStatus>('no');

  const { error, success } = t('responseMessgaes', {
    returnObjects: true,
  }) as ResponseMessages;

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(() => {
      const { value } = queryTopicsEn.find(
        ({ key }) => key === formParams.queryTopic,
      )!;
      const requestData = {
        ...formParams,
        queryTopic: value,
      };
      emailjs
        .send(emailServiceId, supportEmailTemplateId, requestData, emailKey)
        .then(() => {
          setResponseStatus('success');
          dispatch({ name: 'reset' });
        })
        .catch(() => setResponseStatus('error'));
    });
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    dispatch({ name, value });
  };

  const handleQueryTopicChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    dispatch({ name, value });
  };

  return (
    <form className={form} onSubmit={handleFormSubmit}>
      {contactUsForm.map((formItem, index) => {
        const { name, placeholder } = formItem;
        const error = errors[name] ?? '';

        return (
          <ErrorWrapper key={index} error={error}>
            {formItem.type === 'text' && (
              <InputField
                placeholder={t(placeholder)}
                onChange={handleFieldChange}
                name={name}
                value={formParams[name]}
              />
            )}
            {formItem.type === 'select' && (
              <Select
                value={formParams[name]}
                placeholder={t(placeholder)}
                onChange={handleQueryTopicChange}
                options={t(formItem.options, { returnObjects: true })}
                name={name}
              />
            )}
            {formItem.type === 'textarea' && (
              <InputArea
                value={formParams[name]}
                rows={formItem.rows}
                placeholder={t(placeholder)}
                onChange={handleFieldChange}
                name={name}
              />
            )}
          </ErrorWrapper>
        );
      })}
      <Button type="submit" styleType="colored">
        {t('sendButtonText')}
      </Button>
      <ResponseMessage isActive={responseStatus !== 'no'}>
        {responseStatus === 'success' ? success : error}
      </ResponseMessage>
    </form>
  );
};

export default ContactForm;
