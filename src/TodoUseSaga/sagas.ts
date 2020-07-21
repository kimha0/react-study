import { call, put, takeEvery, all } from 'redux-saga/effects';
import { Item } from './types';
import { createAsyncAction, action } from 'typesafe-actions';

const todosGetAll = async (): Promise<Item[]> => await fetch('http://localhost:8000/todo').then(res => res.json()).then(json => json.list);

export const ASYNC_ACTION_TYPE = {
  FETCH_TODOS_REQUEST: 'FETCH_TODOS_REQUEST' as const,
  FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS' as const,
  FETCH_TODOS_FAILURE: 'FETCH_TODOS_FAILURE' as const,
}

export const fetchTodosAsync = createAsyncAction(
  ASYNC_ACTION_TYPE.FETCH_TODOS_REQUEST,
  ASYNC_ACTION_TYPE.FETCH_TODOS_SUCCESS,
  ASYNC_ACTION_TYPE.FETCH_TODOS_FAILURE,
)<string, Item[], Error>();

export const success = (list: Item[]) => action(ASYNC_ACTION_TYPE.FETCH_TODOS_SUCCESS, list);
export const request = () => action(ASYNC_ACTION_TYPE.FETCH_TODOS_REQUEST);

function* fetchTodoSaga(action: ReturnType<typeof fetchTodosAsync.request>): Generator {
  try {
    const response = (yield call(todosGetAll) as unknown) as Item[];

    yield put(fetchTodosAsync.success(response));
  } catch (err) {
    yield put(fetchTodosAsync.failure(err));
  }
}

export function* mainSaga() {
  yield all([
    takeEvery(fetchTodosAsync.request, fetchTodoSaga),
  ]);
}
