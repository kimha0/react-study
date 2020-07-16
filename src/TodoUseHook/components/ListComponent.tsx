import React from 'react';
import Style from './Style';
import { Item } from '../types';

const ListComponent = (props: ListComponentProps) => {
  const { item, removeHandle, updateHandle } = props;
  const { title, uuid } = item;

  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onRemove = () => removeHandle(item);
  const onUpdate = () => {
    updateHandle({ ...item, title: inputRef.current?.value ?? title });
    setIsEditable(() => false);
  };
  const onEditable = () => setIsEditable(() => true);
  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onUpdate();
    }
  }

  React.useEffect(() => {
    if (inputRef.current && isEditable) {
      inputRef.current.focus();
    }
  }, [inputRef, isEditable]);

  return (
    <Style.List>
      {
        isEditable ? 
        <input ref={inputRef} onKeyDown={onInputEnter} type='text' defaultValue={title} />
        :
        <p>{title}</p>
      }
      <span className='uuid'>{uuid}</span>
      <div>
        <button><span role='img' aria-label='remove' onClick={onRemove}>✖️</span></button>
        {
          isEditable ?
          <button><span role='img' aria-label='update' onClick={onUpdate}>👌</span></button>
          :
          <button><span role='img' aria-label='edit' onClick={onEditable}>✏️</span></button>
        }
      </div>
    </Style.List>
  )
}

interface ListComponentProps {
  item: Item;
  removeHandle: (item: Item) => void;
  updateHandle: (item: Item) => void;
}

export default ListComponent;