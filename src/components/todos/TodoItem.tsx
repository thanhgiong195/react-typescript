import * as React from 'react';
import { css } from 'emotion';
import { TodoItemInterface } from '../../interfaces';

export const TodoItem = (props: TodoItemInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [formState, setFormState] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  };

  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.handleTodoUpdate(formState, props.todos.id);
    }
  };

  return (
    <div className="todo-item">
      <button type="button" className={buttonStyle} onClick={() => props.handleTodoComplete(props.todos.id)}>
        {props.todos.isManager ? <span className="todo-item-checked">✔</span> : <span className="todo-item-unchecked" />}
      </button>

      <div className="todo-item-input-wrapper">
        <input
          ref={inputRef}
          value={props.todos.name}
          onBlur={props.handleTodoBlur}
          onChange={event => handleInputChange(event)}
          onKeyPress={event => handleInputEnter(event)}
        />
      </div>

      <button type="button" className={buttonStyle} onClick={() => props.handleTodoRemove(props.todos.id)}>
        ⨯
      </button>
    </div>
  );
};

const buttonStyle = css(`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 28px;
  cursor: pointer;
  line-height: 1;
  color: #ececec;
  border: none;
  box-shadow: none;
  transition: 0.25s color ease-in-out;
  background-color: transparent;

  &:hover, &:focus {
    color: #111;
    box-shadow: none;
    border: none;
  }
`);
