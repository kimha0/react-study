import { call, put, takeEvery } from 'redux-saga/effects';
import { ACTION_TYPE } from './container';
import { Item } from './types';
import { set } from './component';


const fetchTodo = async (): Promise<Item[]> => await fetch('http://localhost:8000/todo').then(res => res.json()).then(json => json.list);

export function* watchTodoListRequestStart() {
  yield takeEvery(
    ACTION_TYPE.GET_LIST,
    todoList,
  );
}

function* todoList() {
  const list = yield call(fetchTodo)
  yield put(set(list));
}