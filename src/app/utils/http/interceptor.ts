import axios, { InternalAxiosRequestConfig } from 'axios';
import { getToken, removeToken } from '../auth/token';
import history from "../browser/browserHistory";


export const apiClient = axios.create();


// const navigate = useNavigate();
const authInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json';
    config.headers.Authorization = getToken() ? `Bearer ${getToken()}` : undefined;
  }

  return config;
};

apiClient.interceptors.request.use(authInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 'INVALID_TOKEN') {
      removeToken();
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get('redirectTo');
      history.push(`/auth/login?redirectTo=${redirectTo}`);
    }

    return Promise.reject(new Error(error));
  },
);


