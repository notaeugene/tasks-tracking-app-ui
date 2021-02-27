import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

import VisibleComponent from '../VisibleComponent/VisibleComponent';
// import CloseButton from '../CloseButton/CloseButton';

import {
  AlertType,
  ALERT_ICON,
  FADE_DURATION,
  VISIBILITY_DURATION,
  TITLE,
} from './Alert.const';
import styles from './Alert.module.scss';

export type AlertProps = {
  type: AlertType;
  message: string;
  visible: boolean;
  duration?: number;
  onToggle?: () => void;
};

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  visible,
  duration = FADE_DURATION,
  onToggle,
}) => {
  const statusClassNames = classNames(
    styles.status,
    styles[type.toLowerCase()]
  );
  const title = TITLE[type];
  const icon = ALERT_ICON[type] as IconProp;

  return (
    <div className={styles.wrapper}>
      <VisibleComponent
        visible={visible}
        visibilityDuration={VISIBILITY_DURATION}
        fadeDuration={duration}
        onToggle={onToggle}
      >
        <div className={styles.alert}>
          <div className={styles.statusWrapper}>
            <div className={statusClassNames}>
              <FontAwesomeIcon icon={icon} className={styles.icon} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.message}>{message}</div>
          </div>
          {/* <CloseButton className={styles.btnClose} onClick={() => {}} /> */}
        </div>
      </VisibleComponent>
    </div>
  );
};

export default Alert;
