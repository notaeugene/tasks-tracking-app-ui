import React, { useEffect, useState } from 'react';

import ProjectsStore from '../../state/store/projectsStore';
import { ProjectsList as ProjectsListType } from '../../types/projects/projectsList';
import { Nullable } from '../../utils/types';
import Container from '../../components/common/Container/Container';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

export type HomepageProps = {
  projectsStore: ProjectsStore;
};

const Homepage: React.FC<HomepageProps> = ({ projectsStore }) => {
  const [projects, setProjects] = useState<Nullable<ProjectsListType>>(null);

  useEffect(() => {
    !projects &&
      (async () => {
        const data = await projectsStore.getProjects();
        setProjects(data!);
      })();
  }, [projects, projectsStore]);

  return (
    <Container>
      <SectionHeading heading="My Projects" />
      {projects && <ProjectsList projects={projects} />}
    </Container>
  );
};

export default Homepage;
