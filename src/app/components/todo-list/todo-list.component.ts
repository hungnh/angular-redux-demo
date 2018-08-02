import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {TodoActions} from '../../actions';
import {NgRedux, select} from '@angular-redux/store';
import {Todo} from '../../models/Todo';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select('todos') todos$: Observable<Todo[]>;

  constructor(private todoActions: TodoActions) {
  }

  addTodo(titleInput) {
    if (!titleInput.value) {
      return;
    }

    const todo = new Todo(titleInput.value);
    this.todoActions.add(todo);

    titleInput.value = '';
  }

  toggleTodo(todo) {
    this.todoActions.toggle(todo);
  }

  removeTodo(todo) {
    this.todoActions.remove(todo);
  }
}
