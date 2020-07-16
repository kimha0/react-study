import React from 'react';
import { Item } from "./types";
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoActionTypes } from '../TodoUseHook/types';
import { RootState } from '../types';
import { update, remove, add } from './container';

function TodoUseHookComponent() {

  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
  const list = useSelector<RootState, Readonly<Item[]>>(state => state.todoUseHook.list);


  const filteredList = React.useMemo(() => list.filter(item => item.isVisible), [list]);

  const updateHandle = (item: Item) => dispatch(update(item));
  const removeHandle = (item: Item) => dispatch(remove(item));
  const addHandle = (item: Item) => dispatch(add(item));


  return (
    <div className="App">
      {filteredList.map(item => <ListComponent key={item.uuid} item={item} removeHandle={removeHandle} updateHandle={updateHandle} />)}

      <InputComponent add={addHandle} />
    </div>
  );
};

export default TodoUseHookComponent;
