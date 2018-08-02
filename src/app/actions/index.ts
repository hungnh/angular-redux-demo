import {Action} from 'redux';

export * from './todo.actions';

export interface ActionWithBody extends Action {
  body?: any;
}
