import React from 'react';
import { Props, Item } from "./types";
import ListComponent from './components/ListComponent';
import InputComponent from './components/InputComponent';

function TodoComponent(props: Props) {
  const { add, remove, update, list } = props;

  const filteredList = React.useMemo(() => list.filter(item => item.isVisible), [list]);

  const updateHandle = (item: Item) => update(item);
  const removeHandle = (item: Item) => remove(item);


  return (
    <div className="App">
      {filteredList.map(item => <ListComponent key={item.uuid} item={item} removeHandle={removeHandle} updateHandle={updateHandle} />)}

      <InputComponent add={add} />
    </div>
  );
};

export default TodoComponent;
