import { apiClient } from './interceptor';

export interface ApiConfig {
  headers: Record<string, any>;
  params: any;
}

function httpClient(endpoint: string) {
  function get<T = any>(config?: ApiConfig) {
    return apiClient.get<T, T>(endpoint, config);
  }

  function post<T = any>(body: any, config?: ApiConfig) {
    return apiClient.post<T, T>(endpoint, body, config);
  }

  function put<T = any>(body: any, config?: ApiConfig) {
    return apiClient.put<T, T>(endpoint, body, config);
  }

  function deleteFn<T = any>(config?: ApiConfig) {
    return apiClient.delete<T, T>(endpoint, config);
  }

  return { get, post, put, deleteFn };
}

export { httpClient };
