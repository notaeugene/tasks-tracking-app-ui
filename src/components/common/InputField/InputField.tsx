import React from 'react';
import classNames from 'classnames';

import styles from './InputField.module.scss';

export type InputFieldProps = {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  autocomplete?: 'off' | 'on';
  defaultValue?: string;
  error: boolean;
  errorMessage?: string;
};

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      name,
      placeholder,
      autocomplete = 'off',
      defaultValue,
      error,
      errorMessage,
    },
    ref
  ) => (
    <>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        defaultValue={defaultValue}
        className={classNames(styles.inputField, {
          [styles.inputError]: error,
        })}
      />
      {error && errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </>
  )
);

export default InputField;
