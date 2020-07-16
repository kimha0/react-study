import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Item } from './../types';
import Styled from './Styled';

interface InputComponentProps {
  add: (item: Item) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ add }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const onAddClick = () => {
    add({ isVisible: true, title: ref.current?.value ?? '', uuid: uuidv4() });

    if (ref.current) {
      ref.current.value = '';
    }
  };

  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onAddClick();
    }
  }
  return (
    <Styled.InputStyled>
      <input type='text' ref={ref} onKeyDown={onInputEnter}></input>
      <button onClick={onAddClick}>추가</button>
    </Styled.InputStyled>
  )
};

export default InputComponent;