import React, { PropsWithChildren } from 'react';

import Container from '../../components/common/Container/Container';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';

export type HomepageProps = {};

const Homepage: React.FC<PropsWithChildren<HomepageProps>> = ({ children }) => (
  <Container>
    <SectionHeading heading="My Projects" />
    {children}
  </Container>
);

export default Homepage;
