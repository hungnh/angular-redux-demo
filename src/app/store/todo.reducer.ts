import {IAppState} from './index';
import {Todo} from '../models/Todo';
import {AnyAction} from 'redux';
import {ActionWithBody, TodoActions} from '../actions';

const INIT_STATE: Todo[] = [];

export function TodoReducer(state: Todo[] = INIT_STATE, action: ActionWithBody) {
  switch (action.type) {
    case TodoActions.TODO_ADD:
      return [...state, action.body];
    case TodoActions.TODO_REMOVE:
      return state.filter(todo => todo !== action.body);
    case TodoActions.TODO_TOGGLE:

    default:
      return state;
  }
}
