import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer, Actions } from 'components/app';

const configureStore = initState => {
  const middleWare = [];
  if (process.env.NODE_ENV !== "production") {
    middleWare.push(logger);
  }

  const store = createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );

  store.dispatch(Actions.initialiseGame());

  return store;
};

export default configureStore;
