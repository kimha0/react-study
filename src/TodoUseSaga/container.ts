import { Item, TodoState } from './types';
import { action, createReducer, ActionType } from 'typesafe-actions';
import { success, request, ASYNC_ACTION_TYPE } from './sagas';

export const initialState = {
  list: [] as Readonly<Item[]>,
}

export const ACTION_TYPE = {
  ADD_LIST: 'todoUseSaga/ADD_LIST' as const,
  REMOVE_LIST: 'todoUseSaga/REMOVE_LIST' as const,
  UPDATE_LIST: 'todoUseSaga/UPDATE_LIST' as const,
}


const add = (item: Item) => action(ACTION_TYPE.ADD_LIST, item);
const remove = (item: Item) => action(ACTION_TYPE.REMOVE_LIST, item);
const update = (item: Item) => action(ACTION_TYPE.UPDATE_LIST, item);

export const actions = {
  add,
  remove,
  update,
  success,
  request,
};

export const todoUseSagaReducer = createReducer<TodoState, ActionType<typeof actions>>(initialState, {
  [ACTION_TYPE.ADD_LIST]: (state, action) => ({ ...state, list: [...state.list, action.payload], }),
  [ACTION_TYPE.REMOVE_LIST]: (state, action) => ({ ...state, list: state.list.filter(item => item.uuid !== action.payload.uuid), }),
  [ACTION_TYPE.UPDATE_LIST]: (state, action) => ({ ...state, list: state.list.reduce<Item[]>((accu, curr) => [...accu, curr.uuid === action.payload.uuid ? action.payload : curr], []), }),
  [ASYNC_ACTION_TYPE.FETCH_TODOS_SUCCESS]: (state, action) => ({ ...state, list: action.payload }),
});
