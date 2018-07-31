import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoStatsComponent} from './todo-stats/todo-stats.component';
import {TodoService} from './services/todo.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoStatsComponent,
    DashboardComponent,
    OthersComponent
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
