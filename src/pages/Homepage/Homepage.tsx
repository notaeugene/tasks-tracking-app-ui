import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

import UIStore from '../../state/store/uiStore';
import ProjectsStore from '../../state/store/projectsStore';
import ProjectDetailsStore from '../../state/store/projectDetailsStore';
import { ProjectsListItem } from '../../domain/project';
import { Nullable } from '../../utils/types';
import Container from '../../components/common/Container/Container';
import SectionHeading from '../../components/common/SectionHeading/SectionHeading';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import SaveProjectModal from '../../components/SaveProjectModal/SaveProjectModal';
import DeleteProjectModal from '../../components/DeleteProjectModal/DeleteProjectModal';
import {
  UPDATE_PROJECT_SUCCESS_TEXT,
  DELETE_PROJECT_SUCCESS_TEXT,
} from '../../components/SaveProjectModal/SaveProjectModal.const';

export type HomepageProps = {
  uiStore: UIStore;
  projectsStore: ProjectsStore;
  projectDetailsStore: ProjectDetailsStore;
};

const Homepage: React.FC<HomepageProps> = ({
  uiStore,
  projectsStore,
  projectDetailsStore,
}) => {
  const [projects, setProjects] = useState<Nullable<ProjectsListItem[]>>(null);
  const [openUpdateProject, setOpenUpdateProject] = useState(false);
  const [openDeleteProject, setOpenDeleteProject] = useState(false);

  const { setAlertSuccessText } = uiStore;
  const { loading: projectsLoading } = projectsStore;
  const {
    preloading: preloadingProjectDetails,
    data: projectDetails,
    error,
    updateProject,
    getProjectById,
    deleteProject,
    updateProjectFromSource,
  } = projectDetailsStore;

  useEffect(() => {
    !projects &&
      (async () => {
        const data = await projectsStore.getProjects();
        setProjects(toJS(data!));
      })();
  }, [projects, projectsStore]);

  useEffect(() => {
    error && setOpenUpdateProject(false);
  }, [error]);

  useEffect(() => {
    if (openUpdateProject) {
      setAlertSuccessText(UPDATE_PROJECT_SUCCESS_TEXT);
    } else if (openDeleteProject) {
      setAlertSuccessText(DELETE_PROJECT_SUCCESS_TEXT);
    }
  }, [openUpdateProject, openDeleteProject, setAlertSuccessText]);

  const handleUpdateProjectToggle = () => {
    setOpenUpdateProject(!openUpdateProject);
  };

  const handleDeleteProjectToggle = () => {
    setOpenDeleteProject(!openDeleteProject);
  };

  const handleUpdateProject = async (id: number) => {
    getProjectById(id);
    handleUpdateProjectToggle();
  };

  const handleDeleteProject = async (id: number) => {
    updateProjectFromSource({ id });
    handleDeleteProjectToggle();
  };

  return (
    <Container>
      <SectionHeading heading="My Projects" />
      <ProjectsList
        loading={projectsLoading}
        spinnerSize="medium"
        projects={projects!}
        onUpdateProject={handleUpdateProject}
        onDeleteProject={handleDeleteProject}
      />
      <SaveProjectModal
        open={openUpdateProject}
        preloading={preloadingProjectDetails}
        onToggle={handleUpdateProjectToggle}
        onUpdateProject={updateProject}
        data={projectDetails || null}
      />
      <DeleteProjectModal
        open={openDeleteProject}
        onToggle={handleDeleteProjectToggle}
        onDeleteProject={deleteProject}
      />
    </Container>
  );
};

export default observer(Homepage);
