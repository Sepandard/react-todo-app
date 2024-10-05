const base = '/api/auth';

export const AUTH_ENDPOINT = {
  base: `${base}`,
  login: `${base}/login`,
  signup: `${base}/signup`,
} as const;

export interface LoginModel {
  email: string;
  password: string;
}

