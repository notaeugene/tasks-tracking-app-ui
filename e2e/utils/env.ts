export type ProcessEnv = {
  REACT_APP_BASE_URL: string;
};

const FALLBACK_BASE_URL = 'http://localhost:3000';

const setupEnv = (): ProcessEnv => {
  const env = (process.env as unknown) as ProcessEnv;
  const baseUrl = env.REACT_APP_BASE_URL || FALLBACK_BASE_URL;

  return {
    ...env,
    REACT_APP_BASE_URL: baseUrl,
  };
};

export default setupEnv;
