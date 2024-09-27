import { useRef, useCallback, useEffect } from 'react';
import useDeepCompareMemoize from './deepCompareMemoize';
import { isEqual } from 'lodash';
import { httpClient, constructUrl } from '@utils/http';
import useMergeState from './useMergeState';

export type QueryOption = {
  cachePolicy?: 'cache-first' | 'no-cache' | 'cache-only';
  lazy?: boolean;
};

const cache: Record<string, any> = {};

const useQuery = <T = any>(
  path: string | string[],
  initialVariables: any,
  { lazy = false, cachePolicy = 'cache-first' }: QueryOption = {},
) => {
  const endpoint = constructUrl(path);
  const hasRequested = useRef(false);
  const memoizedVariables = useDeepCompareMemoize(initialVariables);

  const isLazy = lazy && !hasRequested.current;

  const cachedData = cache[endpoint];
  const isCacheValid = cachedData && isEqual(cachedData.apiVariables, memoizedVariables);
  const canUseCache = isCacheValid && cachePolicy !== 'no-cache' && !hasRequested.current;

  const [state, mergeState] = useMergeState({
    data: canUseCache ? cachedData.data : null,
    error: null,
    isLoading: !    lazy && !canUseCache,
    variables: {},
  });

  const fetchData = useCallback(
    (newVariables?: any) => {
      const variables = { ...state.variables, ...newVariables };
      const apiVariables = { ...memoizedVariables, ...variables };

      if (canUseCache && cachePolicy === 'cache-first') {
        if (newVariables) mergeState({ variables });
        return;
      }

      mergeState({ isLoading: true, variables });

      httpClient(endpoint)
        .get<T>(apiVariables)
        .then(
          (data) => {
            cache[endpoint] = { data, apiVariables };
            mergeState({ data, error: null, isLoading: false });
          },
          (error) => {
            mergeState({ error, data: null, isLoading: false });
          },
        );

      hasRequested.current = true;
    },
    [memoizedVariables, endpoint, mergeState, cachePolicy, canUseCache, state.variables],
  );

  useEffect(() => {
    if (isLazy || (canUseCache && cachePolicy === 'cache-only')) return;
    fetchData();
  }, [fetchData, isLazy, canUseCache, cachePolicy]);



  return {
    ...state,
    variables: { ...memoizedVariables, ...state.variables },
    fetchData,
  };
};

export default useQuery;
