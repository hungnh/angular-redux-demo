import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoStatsComponent} from './components/todo-stats/todo-stats.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {OthersComponent} from './components/others/others.component';
import {RecentTodosComponent} from './components/recent-todos/recent-todos.component';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, INIT_STATE, rootReducer} from './store';
import {TaskingActions} from './actions';

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
    FormsModule,
    NgReduxModule
  ],
  providers: [TaskingActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INIT_STATE);
  }
}
