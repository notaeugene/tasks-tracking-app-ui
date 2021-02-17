import React from 'react';
import classNames from 'classnames';

import styles from './Spinner.module.scss';

export type SpinnerProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

const Spinner: React.FC<SpinnerProps> = ({ className, size = 'medium' }) => (
  <div className={styles.wrapper}>
    <svg
      className={classNames(styles.spinner, className, styles[size])}
      viewBox="25 25 50 50"
    >
      <circle className={styles.circle} cx="50" cy="50" r="20"></circle>
    </svg>
  </div>
);

export default Spinner;
