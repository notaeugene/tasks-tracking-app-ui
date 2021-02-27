import { action, flowResult, makeObservable, observable } from 'mobx';

import { ProjectDetails, ProjectPayload } from '../../domain/project';
import { Nullable } from '../../utils/types';
import BaseStore from './baseStore';

export default class SingleProject extends BaseStore<ProjectDetails> {
  public preloading = false;

  constructor() {
    super();

    makeObservable(this, {
      preloading: observable,
      createProject: action.bound,
      getProjectById: action.bound,
      updateProject: action.bound,
      deleteProject: action.bound,
      updateProjectFromSource: action.bound,
    });
  }

  public async createProject(payload: ProjectPayload) {
    return await flowResult(
      this.fetch(() =>
        // this.http.post<TaskTrackingAppCom.ProjectDetailsJson>(
        // TODO: replace with generic (temp solution)
        this.http.post('/projects', payload)
      )
    );
  }

  public async getProjectById(id: number) {
    this.preloading = true;

    return await flowResult(
      this.fetch(() =>
        // this.http.post<TaskTrackingAppCom.ProjectDetailsJson>(
        // TODO: replace with generic (temp solution)
        this.http.get(`/projects/${id}`)
      )
    ).finally(() => {
      this.preloading = false;
    });
  }

  public async updateProject(payload: ProjectPayload) {
    const { id } = this.data!;

    return await flowResult(
      this.fetch(() =>
        // this.http.put<TaskTrackingAppCom.ProjectDetailsJson>(
        // TODO: replace with generic (temp solution)
        this.http.put(`/projects/${id}`, payload)
      )
    );
  }

  public async deleteProject() {
    const { id } = this.data!;

    return ((await flowResult(
      this.fetch(() => this.http.delete(`/projects/${id}`))
    )) as unknown) as Promise<void>;
  }

  public updateProjectFromSource(source: Partial<ProjectDetails>) {
    this.data = source as Nullable<ProjectDetails>;
  }
}
