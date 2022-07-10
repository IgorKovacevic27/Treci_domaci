import { createStore } from 'redux';
import { reducer, Actions } from 'components/app';

export const configureTestStore = initState => {
  const store = createStore(
    reducer,
    initState
  );

  store.dispatch(Actions.initialiseGame());

  return store;
};
