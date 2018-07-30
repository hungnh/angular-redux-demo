import {Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from './store';
import {INCREMENT} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular + Redux Demo App';
  @select((s: IAppState) => s.counter) count$;

  constructor(private _ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    this._ngRedux.dispatch({ type: INCREMENT });
  }
}
