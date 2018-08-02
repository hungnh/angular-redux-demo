import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';

@Injectable()
export class TodoActions {

  static TODO_ADD = 'TODO_ADD';
  static TODO_REMOVE = 'TODO_REMOVE';
  static TODO_TOGGLE = 'TODO_TOGGLE';
  static TODO_CLEAR_ALL = 'TODO_CLEAR_ALL';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  add(todo: Todo) {
    this.ngRedux.dispatch({
      type: TodoActions.TODO_ADD,
      body: todo
    });
  }

  remove(todo: Todo) {
    this.ngRedux.dispatch({
      type: TodoActions.TODO_REMOVE,
      body: todo
    });
  }

  toggle(todo: Todo) {
    this.ngRedux.dispatch({
      type: TodoActions.TODO_TOGGLE,
      body: todo
    });
  }

  clear() {
    this.ngRedux.dispatch({
      type: TodoActions.TODO_CLEAR_ALL
    });
  }
}
