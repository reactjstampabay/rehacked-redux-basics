import {createStore, compose} from 'redux';
import {persistState} from 'redux-devtools';

import rootReducer from '../reducers/rootReducer';
import baselineMiddleware from '../middleware/baseline';
import DevTools from '../../containers/DevTools';

export default (initialState) => {

  const enhancer = compose(
    baselineMiddleware(),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  );

  const store = createStore(rootReducer, initialState, enhancer);

  handleHotModule(store);

  return store;
}

/**
 * You can write custom logic here!
 * By default we try to read the key from ?debug_session=<key> in the address bar
 */
const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
};

/**
 * hot swap root reducer
 */
const handleHotModule = (store) => {
  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
};
