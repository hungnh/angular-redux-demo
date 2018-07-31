import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-stats',
  templateUrl: './todo-stats.component.html',
  styleUrls: ['./todo-stats.component.css']
})
export class TodoStatsComponent {
  todosCount: number;
  lastUpdate: Date;

  constructor(private todoService: TodoService) {
    this.todosCount = todoService.getTodos().length;

    todoService.todoAdded.subscribe(() => {
      this.todosCount++;
      this.lastUpdate = new Date();
    });

    todoService.todoRemoved.subscribe(() => {
      this.todosCount--;
      this.lastUpdate = new Date();
    });

    todoService.todoToggled.subscribe(() => {
      this.lastUpdate = new Date();
    });

    todoService.todosCleared.subscribe(() => {
      this.todosCount = 0;
      this.lastUpdate = new Date();
    });
  }

  clearTodos() {
    this.todoService.clearTodos();
  }
}
