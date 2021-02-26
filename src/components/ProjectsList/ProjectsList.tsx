import React, { MouseEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Nullable } from '../../utils/types';
import { ProjectsListItem } from '../../domain/project';
import Card from '../common/Card/Card';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';
import withLoading, {
  LoadingProps,
} from '../common/LoadingComponent/LoadingComponent';

import styles from './ProjectsList.module.scss';

export const NoProjectsFallback = () => (
  <div className={styles.noProjects}>You don't have any projects yet.</div>
);

export type ProjectsListProps = LoadingProps & {
  projects: Nullable<ProjectsListItem[]>;
  onUpdateProject: (id: number) => void;
  onDeleteProject: (id: number) => void;
};

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  onUpdateProject,
  onDeleteProject,
}) => {
  const [openProjectDropdown, setOpenProjectDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [projectId, setProjectId] = useState<Nullable<number>>(null);

  const handleBtnMoreClick = (currProjectId: number) => (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const { currentTarget } = event;
    const parent = currentTarget.closest('[class*="card"]') as HTMLDivElement;
    const xPos = parent.offsetLeft + currentTarget.offsetLeft;
    const yPos = currentTarget.clientHeight;

    setDropdownPosition({ x: xPos, y: yPos });
    setOpenProjectDropdown(!openProjectDropdown);
    setProjectId(currProjectId);
  };

  const handleProjectDropdownToggle = () => {
    setOpenProjectDropdown(!openProjectDropdown);
  };

  const handleUpdateProject = () => {
    handleProjectDropdownToggle();
    onUpdateProject(projectId!);
  };

  const handleDeleteProject = () => {
    handleProjectDropdownToggle();
    onDeleteProject(projectId!);
  };

  return (
    <div className={styles.projectsList}>
      {projects?.map(({ id, name, tasksCompleted, tasksTotal }) => (
        <div key={id} className={styles.projectsListItem}>
          <Card>
            <div className={styles.projectName}>{name}</div>
            <div className={styles.tasksCount}>
              {tasksCompleted}/{tasksTotal}
            </div>
            <button
              type="button"
              className={styles.btnMore}
              onClick={handleBtnMoreClick(id)}
            >
              <FontAwesomeIcon icon="ellipsis-v" />
            </button>
          </Card>
        </div>
      ))}
      <ProjectDropdown
        open={openProjectDropdown}
        position={dropdownPosition}
        onToggle={handleProjectDropdownToggle}
        onUpdateProject={handleUpdateProject}
        onDeleteProject={handleDeleteProject}
      />
    </div>
  );
};

export default withLoading<ProjectsListProps>(
  (props) => props.projects !== null && !props.projects.length,
  NoProjectsFallback
)(ProjectsList);
