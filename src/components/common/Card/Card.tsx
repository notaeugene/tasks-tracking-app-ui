import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './Card.module.scss';

export type CardProps = {
  shadow?: boolean;
  bordered?: boolean;
  className?: string;
};

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  children,
  shadow = true,
  bordered,
  className,
}) => (
  <div
    className={classNames([styles.card, className], {
      [styles.withShadow]: shadow && !bordered,
      [styles.bordered]: bordered,
    })}
  >
    <div className={styles.body}>{children}</div>
  </div>
);

export default Card;
