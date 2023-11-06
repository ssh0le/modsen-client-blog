import { ContactFormFields } from '@/types';

export interface FormAction {
  name: keyof ContactFormFields | string | 'reset';
  value?: string;
}

export type ResponseMessageStatus = 'no' | 'success' | 'error';

export interface ResponseMessages {
  error: string;
  success: string;
}

export interface FormValidationError {
  path: string;
  message: string;
}
