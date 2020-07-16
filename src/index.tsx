import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


import Todo, { todoReducer } from './Todo/container';

export const rootReducer = combineReducers({
  todo: todoReducer,
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);

const store = createStore(rootReducer, compose(DevTools.instrument()));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DevTools/>
      <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
