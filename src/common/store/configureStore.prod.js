import {createStore, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import baselineMiddleware from '../middleware/baseline';

export default (initialState) => {
  
  return createStore(
    rootReducer,
    initialState,
    compose(baselineMiddleware())
  );
};
