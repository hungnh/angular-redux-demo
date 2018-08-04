import {Todo} from '../models/Todo';
import {ActionWithBody, TodoActions} from '../actions';
import {tassign} from 'tassign';

export interface ITaskingState {
  todos: Todo[];
  lastUpdate: Date
}

export const TASKING_INIT_STATE: ITaskingState = {
  todos: [],
  lastUpdate: null
};

export function TaskingReducer(state: ITaskingState = TASKING_INIT_STATE, action: ActionWithBody): ITaskingState {
  switch (action.type) {
    case TodoActions.TODO_ADD:
      return addTodo(state, action);
    case TodoActions.TODO_REMOVE:
      return removeTodo(state, action);
    case TodoActions.TODO_TOGGLE:
      return toggleTodo(state, action);
    case TodoActions.TODO_CLEAR_ALL:
      return clearTodo(state, action);
    default:
      return state;
  }
}

function addTodo(state: ITaskingState, action: ActionWithBody) {
  return {
    todos: [...state.todos, action.body],
    lastUpdate: new Date()
  };
}

function removeTodo(state: ITaskingState, action: ActionWithBody) {
  return {
    todos: state.todos.filter(todo => todo.id !== action.body.id),
    lastUpdate: new Date()
  };
}

function toggleTodo(state: ITaskingState, action: ActionWithBody) {
  const todo = state.todos.find(t => t.id === action.body.id);
  const index = state.todos.indexOf(todo);

  return {
    todos: [
      ...state.todos.slice(0, index),

      tassign(todo, {isCompleted: !todo.isCompleted, updatedDate: new Date()}),

      ...state.todos.slice(index + 1),
    ],
    lastUpdate: new Date()
  };
}

function clearTodo(state: ITaskingState, action: ActionWithBody) {
  return {
    todos: [],
    lastUpdate: new Date()};
}
