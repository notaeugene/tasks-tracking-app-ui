import { AxiosResponse } from 'axios';

import HttpService from '../../services/http';
import { Nullable } from '../../utils/types';

export default abstract class BaseStore<T> {
  public data: Nullable<T> = null;
  public error: Nullable<Error> = null;
  public isLoading = false;

  protected http = new HttpService();

  protected async fetch(fetchFn: () => Promise<AxiosResponse<T>>) {
    this.isLoading = true;

    try {
      const response = await fetchFn();
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.isLoading = false;
    }
  }
}
