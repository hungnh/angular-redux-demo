import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoService) {
  }

  addTodo(input) {
    if (!input.value) {
      return;
    }

    this.todoService.addTodo(input.value);

    input.value = '';
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.todoService.removeTodo(todo);
  }

  listTodo() {
    return this.todoService.getTodos();
  }
}
