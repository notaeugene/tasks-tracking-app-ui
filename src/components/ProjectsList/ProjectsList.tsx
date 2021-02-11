import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { ProjectsList as ProjectsListType } from '../../types/projects/projectsList';
import Card from '../common/Card/Card';

import styles from './ProjectsList.module.scss';

export type ProjectsListProps = {
  projects: ProjectsListType;
};

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => (
  <div className={styles.projectsList}>
    {projects.map(({ id, name, tasksCompleted, tasksTotal }) => (
      <div key={id} className={styles.projectsListItem}>
        <Card>
          <div className={styles.projectName}>{name}</div>
          <div className={styles.tasksCount}>
            {tasksCompleted}/{tasksTotal}
          </div>
          <button type="button" className={styles.btnMore}>
            <FontAwesomeIcon icon="ellipsis-v" />
          </button>
        </Card>
      </div>
    ))}
  </div>
);

export default ProjectsList;
