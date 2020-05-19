import * as React from 'react';
import axios from 'axios';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import { TodoInterface } from './interfaces'

import './styles/styles.css'

const TodoListApp = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([])

    React.useEffect(() => {
        console.log('Fetching data...');

        async function fetchData() {
            const response = await axios('/Customer');

            setTodos(response.data);
        }
        fetchData();
    }, []);

    // Creating new todo item
    function handleTodoCreate(todo: TodoInterface) {
        const newTodosState: TodoInterface[] = [...todos]

        newTodosState.push(todo)

        setTodos(newTodosState)
    }

    // Update existing todo item
    const handleTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        axios.put(`/Customer/${id}`,
            {
                name: event.target.value
            }
        )
        
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = event.target.value
        setTodos(newTodosState)
    }

    // Remove existing todo item
    function handleTodoRemove(id: string) {
        axios.delete(`/Customer/${id}`).then(() => {
            const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
            setTodos(newTodosState)
        })
    }

    // Check existing todo item as completed
    function handleTodoComplete(id: string) {
        const newTodosState: TodoInterface[] = [...todos]

        axios.put(`/Customer/${id}`,
            {
                isManager: true
            }
        )

        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isManager = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isManager

        setTodos(newTodosState)
    }

    // Check if todo item has title
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-error')
        }
    }

    return (
        <div className="todo-list-app">
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />

            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    )
}

export default TodoListApp;