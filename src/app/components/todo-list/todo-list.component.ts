import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoService) {
  }

  addTodo(titleInput) {
    if (!titleInput.value) {
      return;
    }

    this.todoService.addTodo(titleInput.value);

    titleInput.value = '';
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
