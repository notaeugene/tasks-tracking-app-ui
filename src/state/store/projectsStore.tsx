import { ProjectsList } from '../../types/projects/projectsList';
import BaseStore from './baseStore';

export default class ProjectsStore extends BaseStore<ProjectsList> {
  public async getProjects() {
    return await this.fetch(() => this.http.get<ProjectsList>('/projects'));
  }
}
