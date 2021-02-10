import { Nullable } from '../utils/types';

const authToken = (): Nullable<string> => localStorage.getItem('token') ?? null;

export default authToken;
