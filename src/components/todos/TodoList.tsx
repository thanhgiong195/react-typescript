// Import dependencies
import * as React from 'react';

import { TodoItem } from './TodoItem';

import { TodoListInterface } from '../../interfaces';

export const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            <TodoItem
              todos={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
              handleToDetail={props.handleToDetail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
