import { observer } from 'mobx-react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Nullable } from '../../utils/types';
import { ProjectDetails } from '../../domain/project';
import InputField from '../common/InputField/InputField';
import Modal from '../common/Modal/Modal';
import {
  CREATE_PROJECT_HEADING,
  UPDATE_PROJECT_HEADING,
} from './SaveProjectModal.const';

export type SaveProjectState = {
  name: string;
};

export type SaveProjectModalProps = {
  create?: boolean;
  data?: Nullable<SaveProjectState>;
  preloading?: boolean;
  open: boolean;
  onToggle: () => void;
  onCreateProject?: (
    data: SaveProjectState
  ) => Promise<Nullable<ProjectDetails>>;
  onUpdateProject?: (
    data: SaveProjectState
  ) => Promise<Nullable<ProjectDetails>>;
};

const SaveProjectModal: React.FC<SaveProjectModalProps> = ({
  create,
  data = { name: '' },
  preloading,
  open,
  onToggle,
  onCreateProject,
  onUpdateProject,
}) => {
  const { handleSubmit, register, errors } = useForm<SaveProjectState>({
    mode: 'onChange',
  });
  const heading = create ? CREATE_PROJECT_HEADING : UPDATE_PROJECT_HEADING;

  const onSubmit = handleSubmit(async (data) => {
    if (create) {
      await onCreateProject!(data);
    } else {
      await onUpdateProject!(data);
    }

    onToggle();
  });

  return (
    <>
      <Modal
        open={open}
        preloading={preloading}
        heading={heading}
        headerAlign="left"
        onToggle={onToggle}
        onSubmit={onSubmit}
      >
        <form>
          <InputField
            ref={register({ required: 'Project name is required' })}
            id="projectName"
            name="name"
            placeholder="Enter project name"
            label="Project name"
            error={Boolean(errors.name)}
            errorMessage={errors.name?.message}
            defaultValue={data?.name}
          />
        </form>
      </Modal>
    </>
  );
};

export default observer(SaveProjectModal);
