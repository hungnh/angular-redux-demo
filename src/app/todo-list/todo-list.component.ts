import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private service: TodoService) {
  }

  addTodo(input) {
    if (!input.value) {
      return;
    }

    this.service.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.service.removeTodo(todo);
  }

  listTodo() {
    return this.service.getTodos();
  }
}
