import { isFunction } from 'lodash';
import { useState, useCallback } from 'react';

function useMergeState<T>(initialState: Partial<T>) {
  type StateUpdater = (currentState: Partial<T>) => Partial<T>;
  type NewState = Partial<T> | StateUpdater;

  const [state, setState] = useState<Partial<T>>(initialState);

  const mergeState = useCallback((newState: NewState) => {
    if (isFunction(newState)) {
      setState((currentState) => newState(currentState));
    } else {
      setState((currentState) => ({ ...currentState, ...newState }));
    }
  }, []);

  return [state, mergeState] as [T, (newState: NewState) => void];
}

export default useMergeState;
