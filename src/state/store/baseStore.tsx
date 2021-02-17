import { AxiosResponse } from 'axios';
import { flow, makeObservable, observable } from 'mobx';

import HttpService from '../../services/http';
import { HttpMethod, Nullable } from '../../utils/types';

export default abstract class BaseStore<T> {
  public data: Nullable<T> = null;
  public error: Nullable<Error> = null;
  public loading = false;
  public saved = false;

  protected http = new HttpService();

  constructor() {
    makeObservable(this, {
      data: observable,
      error: observable,
      loading: observable,
      saved: observable,
      fetch: flow,
    });
  }

  public *fetch(fetchFn: () => Promise<AxiosResponse<T>>) {
    this.loading = true;
    this.saved = false;

    try {
      const response = yield fetchFn();
      const { data, config } = response;
      const method = config.method.toUpperCase();

      this.data = data;
      this.error = null;

      if (method !== HttpMethod.GET) {
        this.saved = true;
      }
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }

    return this.data;
  }
}
