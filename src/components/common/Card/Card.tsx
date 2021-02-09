import React from 'react';

import styles from './Card.module.scss';

export type CardProps = {};

const Card: React.FC<CardProps> = () => (
  <div className={styles.card}>
    <div className={styles.body}></div>
  </div>
);

export default Card;
