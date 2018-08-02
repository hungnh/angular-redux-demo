import {Todo} from '../models/Todo';
import {combineReducers} from 'redux';
import {TodoReducer} from './todo.reducer';

export class IAppState {
  todos: Todo[];
}

export const INIT_STATE: IAppState = {
  todos: []
};

export const rootReducer = combineReducers({
  todos: TodoReducer
});
