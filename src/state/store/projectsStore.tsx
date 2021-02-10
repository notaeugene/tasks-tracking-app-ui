import { Project } from '../../domain/Project';
import BaseStore from './baseStore';

export default class ProjectsStore extends BaseStore<Project[]> {
  public async getProjects() {
    return await this.fetch(() => this.http.get<Project[]>('/projects'));
  }
}
