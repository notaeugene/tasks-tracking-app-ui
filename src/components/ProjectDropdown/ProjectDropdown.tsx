import React from 'react';

import Dropdown from '../common/Dropdown/Dropdown';
import DropdownItem from '../common/Dropdown/DropdownItem/DropdownItem';

import styles from './ProjectDropdown.module.scss';

export type ProjectDropdownProps = {
  open: boolean;
  position: {
    x: number;
    y: number;
  };
  onToggle: () => void;
  onUpdateProject: () => void;
  onDeleteProject: () => void;
};

const ProjectDropdown: React.FC<ProjectDropdownProps> = ({
  open,
  position,
  onToggle,
  onUpdateProject,
  onDeleteProject,
}) => {
  const { x, y } = position;

  return (
    <Dropdown
      open={open}
      xPos={x}
      yPos={y}
      onToggle={onToggle}
      renderHeader={() => <span>Select an Action</span>}
      className={styles.dropdown}
    >
      <DropdownItem
        text="Update project"
        icon="pen"
        onClick={onUpdateProject}
      />
      <DropdownItem
        text="Delete project"
        icon="trash"
        onClick={onDeleteProject}
      />
    </Dropdown>
  );
};

export default ProjectDropdown;
