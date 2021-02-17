import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './BaseButton.module.scss';

export type BaseButtonProps = {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick: () => void;
};

const BaseButton: React.FC<PropsWithChildren<BaseButtonProps>> = ({
  type = 'button',
  variant = 'primary',
  disabled,
  children,
  onClick,
}) => (
  <button
    type={type}
    className={classNames(styles.btn, {
      [styles.btnPrimary]: variant === 'primary',
      [styles.btnSecondary]: variant === 'secondary',
      [styles.btnDanger]: variant === 'danger',
    })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BaseButton;
