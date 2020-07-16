import { connect } from 'react-redux';
import TodoComponent from './component';

import { Item, TodoState, TodoActionTypes } from './types';
import { RootState } from './../types';

export const initialState = {
  list: [] as Item[],
}

export const ACTION_TYPE = {
  ADD_LIST: 'todo/ADD_LIST',
  REMOVE_LIST: 'todo/REMOVE_LIST',
  UPDATE_LIST: 'todo/UPDATE_LIST',
}

export const todoReducer = (state: TodoState = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ACTION_TYPE.ADD_LIST: {
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    }
    case ACTION_TYPE.REMOVE_LIST: {
      return {
        ...state,
        list: state.list.filter(item => item.uuid !== action.payload.uuid),
      }
    }
    case ACTION_TYPE.UPDATE_LIST: {
      return {
        ...state,
        list: state.list.reduce<Item[]>((accu, curr) => [...accu, curr.uuid === action.payload.uuid ? action.payload : curr], [])
      }
    }

    default: {
      return state;
    }
  }
}

const mapState = (state: RootState) => ({
  list: state.todo.list,
});

const mapDispatch = {
  add: (item: Item) => ({ type: ACTION_TYPE.ADD_LIST, payload: item }),
  remove: (item: Item) => ({ type: ACTION_TYPE.REMOVE_LIST, payload: item }),
  update: (item: Item) => ({ type: ACTION_TYPE.UPDATE_LIST, payload: item }),
}

export const connector = connect(mapState, mapDispatch);

export default connector(TodoComponent);

