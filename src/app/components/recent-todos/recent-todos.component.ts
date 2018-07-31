import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-recent-todos',
  templateUrl: './recent-todos.component.html',
  styleUrls: ['./recent-todos.component.css']
})
export class RecentTodosComponent implements OnInit {

  recentTodos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.recentTodos = this.todoService.getTodos().slice(0, 4);

    this.todoService.todoAdded.subscribe((todo: Todo) => {
      this.recentTodos.splice(4, 1);
      this.recentTodos.unshift(todo);
    });

    this.todoService.todoRemoved.subscribe((todo: Todo) => {
       const idx = this.recentTodos.indexOf(todo);
       if (idx !== -1) {
         this.recentTodos.splice(idx, 1);
       }
    });

    this.todoService.todoToggled.subscribe((todo: Todo) => {
      const idx = this.recentTodos.indexOf(todo);
      if (idx === -1) {
        this.recentTodos.splice(4, 1);
        this.recentTodos.unshift(todo);
      } else {
        this.recentTodos.splice(idx, 1);
        this.recentTodos.unshift(todo);
      }
    });

    this.todoService.todosCleared.subscribe((todo: Todo) => {
      this.recentTodos = [];
    });
  }

}
