import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


import Todo, { todoReducer } from './Todo/container';
import { todoUseHookReducer } from './TodoUseHook/container';
import TodoUseHookComponent from './TodoUseHook/component';
import Style from './Style';

export const rootReducer = combineReducers({
  todo: todoReducer,
  todoUseHook: todoUseHookReducer,
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
      <Style.View>
        <Todo />
        <TodoUseHookComponent />
      </Style.View>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
