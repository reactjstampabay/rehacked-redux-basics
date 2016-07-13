/**
 * returns the baseline middleware used by all stores (dev, prod, etc)
 */

import {applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {routerMiddleware} from 'react-router-redux'
import {hashHistory} from 'react-router';

export default () => {
  // build redux router middleware
  const routingMiddleware = routerMiddleware(hashHistory);

  return applyMiddleware(thunkMiddleware, createLogger(), routingMiddleware);
};
