export const API_URL_DEV = 'localhost:';

export const ENV_DEV = 'development';
export const ENV_PROD = 'production';

export const apiUrl = () => process.env.REACT_APP_API_URL;

export const env = () => process.env.REACT_APP_ENV || ENV_DEV;
