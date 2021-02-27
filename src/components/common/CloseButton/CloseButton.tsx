import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './CloseButton.module.scss';

export type CloseButtonProps = {
  className?: string;
  onClick: () => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ className, onClick }) => (
  <button
    type="button"
    className={classNames(styles.btn, className)}
    onClick={onClick}
  >
    <FontAwesomeIcon icon="times" className={styles.icon} />
  </button>
);

export default CloseButton;
