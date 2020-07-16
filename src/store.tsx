import React from 'react';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


import { todoReducer } from './Todo/container';
import { todoUseHookReducer } from './TodoUseHook/container';
import { todoUseSagaReducer } from './TodoUseSaga/container';


import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { watchTodoListRequestStart } from './TodoUseSaga/sagas';

export const rootReducer = combineReducers({
  todo: todoReducer,
  todoUseHook: todoUseHookReducer,
  todoUseSaga: todoUseSagaReducer,
});

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);

const sagaMiddleware = createSagaMiddleware();
const defaultMiddlewares = [ sagaMiddleware ];
const composedMiddlewares = compose(applyMiddleware(...defaultMiddlewares), DevTools.instrument());


const rootSaga = function* root() {
  yield all([fork(watchTodoListRequestStart)]);
}

const store = createStore(rootReducer, composedMiddlewares);

sagaMiddleware.run(rootSaga);

export default store;