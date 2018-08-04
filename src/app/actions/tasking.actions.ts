import {Injectable} from '@angular/core';
import {Todo} from '../models/Todo';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../store';

@Injectable()
export class TaskingActions {

  static TODO_ADD = 'TODO_ADD';
  static TODO_REMOVE = 'TODO_REMOVE';
  static TODO_TOGGLE = 'TODO_TOGGLE';
  static TODO_CLEAR_ALL = 'TODO_CLEAR_ALL';

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  add(title: string) {
    let appState = this.ngRedux.getState().tasking;

    this.ngRedux.dispatch({
      type: TaskingActions.TODO_ADD,
      body: new Todo(appState.todos.length + 1, title)
    });
  }

  remove(id: number) {
    this.ngRedux.dispatch({
      type: TaskingActions.TODO_REMOVE,
      body: {id: id}
    });
  }

  toggle(id: number) {
    this.ngRedux.dispatch({
      type: TaskingActions.TODO_TOGGLE,
      body: {id: id}
    });
  }

  clear() {
    this.ngRedux.dispatch({
      type: TaskingActions.TODO_CLEAR_ALL
    });
  }
}
