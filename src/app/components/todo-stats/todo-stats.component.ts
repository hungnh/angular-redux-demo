import {Component} from '@angular/core';
import {TaskingActions} from '../../actions';
import {Observable} from 'rxjs';
import {select} from '@angular-redux/store';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-stats',
  templateUrl: './todo-stats.component.html',
  styleUrls: ['./todo-stats.component.css']
})
export class TodoStatsComponent {

  @select(s => s.tasking.todos) todos$: Observable<Todo[]>;
  @select(s => s.tasking.lastUpdate) lastUpdate;

  constructor(private todoActions: TaskingActions) {

  }

  clearTodos() {
    this.todoActions.clear();
  }
}
