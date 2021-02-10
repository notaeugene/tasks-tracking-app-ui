import React, { PropsWithChildren } from 'react';

import Header from '../Header/Header';

export type PageKitProps = {};

const PageKit: React.FC<PropsWithChildren<PageKitProps>> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default PageKit;
