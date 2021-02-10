import ProjectsStore from './store/projectsStore';

export default class RootStore {
  public projectsStore = new ProjectsStore();

  public async bootstrap() {
    // TODO: get user
  }
}
