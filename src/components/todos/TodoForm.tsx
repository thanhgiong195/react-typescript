// Import dependencies
import React, {useState, useRef} from 'react'
import shortid from 'shortid'

import { TodoInterface, TodoFormInterface } from '../../interfaces'

export const TodoForm = (props: TodoFormInterface) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [formState, setFormState] = useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value)
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {

            const newTodo: TodoInterface = {
                id: shortid.generate(),
                name: formState,
                isManager: false
            }

            props.handleTodoCreate(newTodo)

            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder='Enter new todo'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}
