import { httpClient } from '@utils';

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

export function login(model: LoginModel) {
  return httpClient(AUTH_ENDPOINT.login).post(model);
}

export function signup(model: LoginModel) {
  return httpClient(AUTH_ENDPOINT.signup).post(model);
}
