// Import dependencies
import * as React from "react";

// Import interfaces
import { TodoItemInterface } from '../../interfaces'

// TodoItem component
export const TodoItem = (props: TodoItemInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const [formState, setFormState] = React.useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value)
        console.log(event.target.value);
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            props.handleTodoUpdate(formState, props.todos.id)
        }
    }

    return (
        <div className="todo-item">
            <div onClick={() => props.handleTodoComplete(props.todos.id)}>
                {props.todos.isManager ? (
                    <span className="todo-item-checked">✔</span>
                ) : (
                    <span className="todo-item-unchecked" />
                )}
            </div>

            <div className="todo-item-input-wrapper">
                <input
                    ref={inputRef}
                    value={props.todos.name}
                    onBlur={props.handleTodoBlur}
                    onChange={event => handleInputChange(event)}
                    onKeyPress={event => handleInputEnter(event)}
                />
            </div>

            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todos.id)}>⨯</div>
        </div>
    );
};
