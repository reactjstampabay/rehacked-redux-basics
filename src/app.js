'use strict';

import 'babel-polyfill';
import './dependencies';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './common/store/configureStore';
import App from './containers/App';

const store = configureStore();

if (document.getElementById('app')) {
  render(
    <Provider store={store}>
      <App store={store}></App>
    </Provider>,
    document.getElementById('app')
  );
}
