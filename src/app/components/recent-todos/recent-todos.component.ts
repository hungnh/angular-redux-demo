import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {Observable} from 'rxjs';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-recent-todos',
  templateUrl: './recent-todos.component.html',
  styleUrls: ['./recent-todos.component.css']
})
export class RecentTodosComponent implements OnInit {

  @select(s => s.tasking.todos) todos$: Observable<Todo[]>;

  recentTodos: Todo[] = [];

  constructor() {
  }

  ngOnInit() {
    const compareByUpdatedDateDesc = (t1, t2) => {
      return t1.updatedDate < t2.updatedDate ? 1 : 0;
    };

    this.todos$.subscribe(todos => {
      let clonedTodos = Object.assign([], todos);
      this.recentTodos = clonedTodos.sort(compareByUpdatedDateDesc).slice(0, 4);
    });
  }

}
