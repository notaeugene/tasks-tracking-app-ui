import { action, flowResult, makeObservable } from 'mobx';

import { ProjectsListItem } from '../../domain/project';
import BaseStore from './baseStore';

export default class ProjectsStore extends BaseStore<ProjectsListItem[]> {
  constructor() {
    super();

    makeObservable(this, {
      getProjects: action.bound,
    });
  }

  public async getProjects() {
    return await flowResult(
      this.fetch(() =>
        this.http.get<TaskTrackingAppCom.ProjectsListJson>('/projects')
      )
    );
  }
}
