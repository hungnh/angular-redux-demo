import {Component} from '@angular/core';
import {TodoActions} from '../../actions';
import {select} from '@angular-redux/store';
import {Todo} from '../../models/Todo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select(s => s.tasking.todos) todos$: Observable<Todo[]>;

  constructor(private todoActions: TodoActions) {
  }

  addTodo(titleInput) {
    let todoTitle = titleInput.value;
    if (!todoTitle) {
      return;
    }

    this.todoActions.add(todoTitle);

    titleInput.value = '';
  }

  toggleTodo(todo: Todo) {
    this.todoActions.toggle(todo.id);
  }

  removeTodo(todo: Todo) {
    this.todoActions.remove(todo.id);
  }
}
