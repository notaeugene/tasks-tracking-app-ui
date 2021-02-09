import React, { PropsWithChildren } from 'react';

import styles from './Container.module.scss';

export type ContainerProps = {};

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
}) => <div className={styles.container}>{children}</div>;

export default Container;
