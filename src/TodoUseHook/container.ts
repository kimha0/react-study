import { Item, TodoState, Actions } from './types';
import { createReducer, action } from 'typesafe-actions';

export const initialState = {
  list: [] as Readonly<Item[]>,
}

export const ACTION_TYPE = {
  ADD_LIST: '@todoUseHook/ADD_LIST' as const,
  REMOVE_LIST: '@todoUseHook/REMOVE_LIST' as const,
  UPDATE_LIST: '@todoUseHook/UPDATE_LIST' as const,
}

const add = (item: Item) => action(ACTION_TYPE.ADD_LIST, item);
const remove = (item: Item) => action(ACTION_TYPE.REMOVE_LIST, item);
const update = (item: Item) => action(ACTION_TYPE.UPDATE_LIST, item);

export const actions = { add, remove, update };

export const todoUseHookReducer = createReducer<TodoState, Actions>(initialState, {
  [ACTION_TYPE.ADD_LIST]: (state, action) => ({ ...state, list: [...state.list, action.payload ] }),
  [ACTION_TYPE.REMOVE_LIST]: (state, action) => ({ ...state, list: state.list.filter(item => item.uuid !== action.payload.uuid), }),
  [ACTION_TYPE.UPDATE_LIST]: (state, action) => ({ ...state, list: state.list.reduce<Item[]>((accu, curr) => [...accu, curr.uuid === action.payload.uuid ? action.payload : curr], []) }),
});