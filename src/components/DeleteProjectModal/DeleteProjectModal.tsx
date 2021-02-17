import React from 'react';
import ConfirmModal from '../common/ConfirmModal/ConfirmModal';

export type DeleteProjectModalProps = {
  open: boolean;
  onToggle: () => void;
  onDeleteProject: () => Promise<void>;
};

const DeleteProjectModal: React.FC<DeleteProjectModalProps> = ({
  open,
  onToggle,
  onDeleteProject,
}) => {
  return (
    <ConfirmModal
      open={open}
      text="Are you sure that you want to delete the project?"
      onToggle={onToggle}
      onSubmit={onDeleteProject}
    />
  );
};

export default DeleteProjectModal;
