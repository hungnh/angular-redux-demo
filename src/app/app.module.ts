import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoStatsComponent} from './components/todo-stats/todo-stats.component';
import {TodoService} from './services/todo.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OthersComponent } from './components/others/others.component';
import { RecentTodosComponent } from './components/recent-todos/recent-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoStatsComponent,
    DashboardComponent,
    OthersComponent,
    RecentTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
