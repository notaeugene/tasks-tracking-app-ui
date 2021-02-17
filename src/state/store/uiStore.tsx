import { action, makeAutoObservable } from 'mobx';

export default class UIStore {
  public alertSuccessText = '';

  constructor() {
    makeAutoObservable(this, {
      setAlertSuccessText: action.bound,
    });
  }

  public setAlertSuccessText(text: string) {
    this.alertSuccessText = text;
  }
}
