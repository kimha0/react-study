import { Item, TodoState, TodoActionTypes } from './types';

export const initialState = {
  list: [] as Item[],
}

export const ACTION_TYPE = {
  ADD_LIST: 'todoUseHook/ADD_LIST',
  REMOVE_LIST: 'todoUseHook/REMOVE_LIST',
  UPDATE_LIST: 'todoUseHook/UPDATE_LIST',
}

export const todoUseHookReducer = (state: TodoState = initialState, action: TodoActionTypes): TodoState => {
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
