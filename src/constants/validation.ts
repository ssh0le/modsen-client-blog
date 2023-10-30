import { object, string } from 'yup';

import { ContactFormFields } from '@/types';

const requiredMessage = 'This field is required';
const wrongNameLength = 'Your name has wrong length';
const wrongMessageLength = 'Message has wrong length';

export const userSchema = object<ContactFormFields>().shape({
  userEmail: string().required(requiredMessage).email('Wrong email format'),
  userName: string()
    .required(requiredMessage)
    .min(2, wrongNameLength)
    .max(30, wrongNameLength),
  message: string()
    .required(requiredMessage)
    .min(4, wrongMessageLength)
    .max(100, wrongMessageLength),
  queryTopic: string().required(requiredMessage),
});
