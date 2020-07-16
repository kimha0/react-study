import React from 'react';
import { Item } from "./types";
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoActionTypes } from './types';
import { RootState } from '../types';
import { update, remove, add, get } from './container';



function TodoUseHookComponent() {

  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
  const list = useSelector<RootState, Readonly<Item[]>>(state => state.todoUseSaga.list);


  const filteredList = React.useMemo(() => list.filter(item => item.isVisible), [list]);

  const updateHandle = (item: Item) => dispatch(update(item));
  const removeHandle = (item: Item) => dispatch(remove(item));
  const addHandle = (item: Item) => dispatch(add(item));
  const getHandle = () => dispatch(get());


  return (
    <div className="App">
      {filteredList.map(item => <ListComponent key={item.uuid} item={item} removeHandle={removeHandle} updateHandle={updateHandle} />)}

      <InputComponent add={addHandle} />
      <button onClick={getHandle}>Load data</button>
    </div>
  );
};

export default TodoUseHookComponent;
