// Import dependencies
import * as React from "react";

// Import interfaces
import { TodoItemInterface } from '../interfaces'

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const [formState, setFormState] = React.useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value)
        console.log(event.target.value);
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            props.handleTodoUpdate(formState, props.todo.id)
        }
    }

    return (
        <div className="todo-item">
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isManager ? (
                    <span className="todo-item-checked">✔</span>
                ) : (
                    <span className="todo-item-unchecked" />
                )}
            </div>

            <div className="todo-item-input-wrapper">
                <input
                    ref={inputRef}
                    value={props.todo.name}
                    onBlur={props.handleTodoBlur}
                    onChange={event => handleInputChange(event)}
                    onKeyPress={event => handleInputEnter(event)}
                />
            </div>

            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>⨯</div>
        </div>
    );
};

export default TodoItem;
