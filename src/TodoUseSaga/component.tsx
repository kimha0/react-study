import React from 'react';
import { Item, Actions } from "./types";
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../types';
import { actions } from './container';

function TodoUseHookComponent() {
  const dispatch = useDispatch<Dispatch<Actions>>();

  const list = useSelector<RootState, Readonly<Item[]>>(state => state.todoUseSaga.list);
  const filteredList = React.useMemo(() => list.filter(item => item.isVisible), [list]);

  const updateHandle = React.useCallback((item: Item) => dispatch(actions.update(item)), [dispatch]);
  const removeHandle = React.useCallback((item: Item) => dispatch(actions.remove(item)), [dispatch]);
  const addHandle = React.useCallback((item: Item) => dispatch(actions.add(item)), [dispatch]);
  const getHandle = React.useCallback(() => dispatch(actions.request()), [dispatch]);


  return (
    <div className="App">
      {filteredList.map(item => <ListComponent key={item.uuid} item={item} removeHandle={removeHandle} updateHandle={updateHandle} />)}
      <InputComponent add={addHandle} />
      <button onClick={getHandle}>Load data</button>
    </div>
  );
};

export default TodoUseHookComponent;
