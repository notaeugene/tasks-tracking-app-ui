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
      if (!this.data) {
        const response = await fetchFn(); // TODO: handle http errors
        this.data = response.data;
        return this.data;
      }
    } catch (err) {
      console.log(err);

      this.error = err;
    } finally {
      this.isLoading = false;
    }
  }
}
