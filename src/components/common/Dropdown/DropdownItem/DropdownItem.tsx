import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './DropdownItem.module.scss';

export type DropdownItemProps = {
  color?: string;
  active?: boolean;
  text: string;
  icon: IconProp;
  onClick: () => void;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  color,
  active,
  text,
  icon,
  onClick,
}) => {
  return (
    <div className={styles.item} onClick={onClick}>
      {color && (
        <div className={styles.color} style={{ backgroundColor: color }}>
          {active && <FontAwesomeIcon icon="check" />}
        </div>
      )}
      <div className={styles.text}>{text}</div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default DropdownItem;
