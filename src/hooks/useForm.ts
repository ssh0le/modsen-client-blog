import { useCallback, useEffect, useReducer, useState } from 'react';
import { AnyObject, ObjectSchema, ValidationError } from 'yup';

import { FormAction, ValidationErrors } from './interfaces';

const createReducer =
  <T extends object>(initialState: T) =>
  (state: T, action: FormAction<T>): T => {
    const { name, value } = action;
    if (value !== undefined && name in state) {
      return {
        ...state,
        [name]: value,
      };
    } else if (name === 'reset') {
      return initialState;
    } else {
      return state;
    }
  };

export const useForm = <FormType extends AnyObject>(
  initialState: FormType,
  schema: ObjectSchema<FormType>,
) => {
  const reducer = useCallback(createReducer(initialState), [initialState]);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [formParams, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (isTouched) {
      const validateTouchedForm = async () => {
        await validateForm();
      };

      validateTouchedForm();
    }
  }, [formParams]);

  const validateForm = (resolve?: () => void) => {
    return schema
      .validate(formParams, { abortEarly: false })
      .then(() => {
        setErrors({});
        if (resolve) {
          resolve();
        }
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          if (error.inner) {
            setIsTouched(true);
            setErrors(
              error.inner.reduce((acc, { path, message }) => {
                if (path) {
                  return { ...acc, [path]: message };
                }
                return acc;
              }, {}),
            );
          } else {
            setErrors({});
          }
        } else {
          setErrors({});
        }
      });
  };

  const handleSubmit = async (submitFunction: (form: FormType) => void) => {
    await validateForm(() => {
      setIsTouched(false);
      submitFunction(formParams);
    });
  };

  return { handleSubmit, errors, dispatch, formParams };
};
