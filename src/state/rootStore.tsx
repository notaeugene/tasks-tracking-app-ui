import UIStore from './store/uiStore';
import ProjectsStore from './store/projectsStore';
import ProjectsDetailsStore from './store/projectDetailsStore';

export default class RootStore {
  public uiStore = new UIStore();
  public projectDetailsStore = new ProjectsDetailsStore();
  public projectsStore = new ProjectsStore();

  public async bootstrap() {
    // TODO: get user
  }
}
