import {Action} from 'redux';

export * from './tasking.actions';

export interface ActionWithBody extends Action {
  body?: any;
}
