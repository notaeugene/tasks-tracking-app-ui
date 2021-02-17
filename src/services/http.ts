import axios, { AxiosInstance } from 'axios';

import { Nullable } from '../utils/types';
import { apiUrl } from './environment';
import authToken from './token';

export default class HttpService {
  private _http: AxiosInstance;

  constructor() {
    this._http = axios.create({
      baseURL: apiUrl(),
      timeout: 3000,
    });

    this._http.interceptors.request.use(
      (config) => {
        config.headers['Authentication'] = `Bearer ${authToken()}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  public async post<T>(url: string, body: Nullable<any>) {
    return await this._http.post<T>(url, body);
  }

  public async get<T>(url: string) {
    return await this._http.get<T>(url);
  }

  public async put<T>(url: string, body: Nullable<any>) {
    return await this._http.put<T>(url, body);
  }

  public async delete<T>(url: string) {
    return await this._http.delete<T>(url);
  }
}
