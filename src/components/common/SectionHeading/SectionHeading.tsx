import React from 'react';

import styles from './SectionHeading.module.scss';

export type SectionHeadingProps = {
  heading: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => (
  <h1 className={styles.heading}>{heading}</h1>
);

export default SectionHeading;
