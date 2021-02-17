import { observer } from 'mobx-react';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import RootStore from '../../../state/rootStore';
import Alert from '../../common/Alert/Alert';
import { AlertType } from '../../common/Alert/Alert.const';
import SaveProjectModal from '../../SaveProjectModal/SaveProjectModal';
import { CREATE_PROJECT_SUCCESS_TEXT } from '../../SaveProjectModal/SaveProjectModal.const';

import Header from '../Header/Header';

export type DefaultLayoutProps = {
  rootStore: RootStore;
};

const DefaultLayout: React.FC<PropsWithChildren<DefaultLayoutProps>> = ({
  rootStore,
  children,
}) => {
  const [openCreateProject, setOpenCreateProject] = useState(false);

  const { projectDetailsStore, uiStore } = rootStore;
  const { createProject, saved, error } = projectDetailsStore;
  const { alertSuccessText, setAlertSuccessText } = uiStore;

  useEffect(() => {
    setAlertSuccessText(CREATE_PROJECT_SUCCESS_TEXT);
  }, [openCreateProject, setAlertSuccessText]);

  const handleCreateProjectToggle = () => {
    setOpenCreateProject(!openCreateProject);
  };

  return (
    <div>
      <Header onProjectCreate={handleCreateProjectToggle} />
      {children}
      <SaveProjectModal
        create
        open={openCreateProject}
        onToggle={handleCreateProjectToggle}
        onCreateProject={createProject}
      />
      <Alert
        type={AlertType.SUCCESS}
        message={alertSuccessText}
        visible={saved}
      />
      <Alert
        type={AlertType.ERROR}
        message={error?.message || ''}
        visible={!!error}
      />
    </div>
  );
};

export default observer(DefaultLayout);
