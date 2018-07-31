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

  constructor(private service: TodoService) {
    this.todosCount = service.getTodos().length;

    service.todoAdded.subscribe(() => {
      this.todosCount++;
      this.lastUpdate = new Date();
    });

    service.todoRemoved.subscribe(() => {
      this.todosCount--;
      this.lastUpdate = new Date();
    });

    service.todoToggled.subscribe(() => {
      this.lastUpdate = new Date();
    });

    service.todosCleared.subscribe(() => {
      this.todosCount = 0;
      this.lastUpdate = new Date();
    });
  }

  clearTodos() {
    this.service.clearTodos();
  }
}
