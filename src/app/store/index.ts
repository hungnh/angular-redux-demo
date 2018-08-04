import {Todo} from '../models/Todo';
import {combineReducers} from 'redux';
import {ITaskingState, TASKING_INIT_STATE, TaskingReducer} from './todo.store';

export class IAppState {
  tasking: ITaskingState;
}

export const INIT_STATE: IAppState = {
  tasking: TASKING_INIT_STATE
};

export const rootReducer = combineReducers({
  tasking: TaskingReducer
});
