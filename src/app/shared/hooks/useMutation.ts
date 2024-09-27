import { useCallback } from 'react';
import useMergeState from './useMergeState';
import { constructUrl, httpClient } from '@utils/http';

type HttpMethod = 'post' | 'put' | 'deleteFn';
type MutationState<T> = {
  data: T | null;
  error: any;
  isWorking: boolean;
};

const useMutation = <T = any>(method: HttpMethod, path: string | string[]) => {
  const endpoint = constructUrl(path);

  const [state, mergeState] = useMergeState<MutationState<T>>({
    data: null,
    error: null,
    isWorking: false,
  });

  const makeRequest = useCallback(
    (variables: any) =>
      new Promise<T>((resolve, reject) => {
        mergeState({ isWorking: true });

        httpClient(endpoint)
          [method]<T>(endpoint, variables)
          .then(
            (response) => {
              mergeState({ data: response, error: null, isWorking: false });
              resolve(response);
            },
            (error) => {
              mergeState({ error, data: null, isWorking: false });
              reject(error);
            },
          );
      }),
    [method, endpoint, mergeState],
  );

  return [
    {
      ...state,
      [getIsWorkingAlias(method)]: state.isWorking,
    },
    makeRequest,
  ];
};

const getIsWorkingAlias = (method: HttpMethod) => {
  switch (method) {
    case 'post':
      return 'isCreating';
    case 'put':
      return 'isUpdating';
    case 'deleteFn':
      return 'isDeleting';
    default:
      return 'isWorking';
  }
};

export default useMutation;
