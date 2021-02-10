import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ActionButton.module.scss';

export type ActionButtonProps = {
  icon: IconProp;
  onClick: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
  </button>
);

export default ActionButton;
