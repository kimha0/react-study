import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Todo from './Todo/container';
import TodoUseHookComponent from './TodoUseHook/component';

import TodoUseSagaComponent from './TodoUseSaga/component';
import Style from './Style';

import store, { DevTools } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DevTools/>
      <Style.View>
        <Todo />
        <TodoUseHookComponent />
        <TodoUseSagaComponent />
      </Style.View>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
