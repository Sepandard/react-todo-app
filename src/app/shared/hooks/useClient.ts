import useMutation from './useMutation';
import useQuery, { QueryOption } from './useQuery';

export default {
  get: <T = any>(path: string | string[], param: any, option: QueryOption) =>
    useQuery<T>(path, param, option),
  post: <T = any>(path: string | string[]) => useMutation<T>('post', path),
  put: <T = any>(path: string | string[]) => useMutation<T>('put', path),
  delete: <T = any>(path: string | string[]) => useMutation<T>('deleteFn', path),
};
