import 'babel-polyfill';
import './dependencies';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './common/store/configureStore';

import App from './containers/App';
import DevTools from './containers/DevTools';

const store = configureStore();

if (document.getElementById('app')) {
  var devTools;
  if (process.env.NODE_ENV === 'dev') {
    devTools = <DevTools />
  }
  render(
    <Provider store={store}>
      <div>
        <App store={store}></App>
        {devTools}
      </div>
    </Provider>,
    document.getElementById('app')
  );
}
