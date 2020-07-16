import { Item, TodoState, TodoActionTypes } from './types';

export const initialState = {
  list: [] as Readonly<Item[]>,
}

export const ACTION_TYPE = {
  ADD_LIST: 'todoUseSaga/ADD_LIST' as const,
  REMOVE_LIST: 'todoUseSaga/REMOVE_LIST' as const,
  UPDATE_LIST: 'todoUseSaga/UPDATE_LIST' as const,
  GET_LIST: 'todoUseSaga/GET_LIST' as const,
  SET_LIST: 'todoUseSaga/SET_LIST' as const,
}

export const todoUseSagaReducer = (state: TodoState = initialState, action: TodoActionTypes): TodoState => {
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
    case ACTION_TYPE.SET_LIST: {
      return {
        ...state,
        list: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}
