import React, {useState, useEffect} from 'react';
import axios from 'axios';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import { TodoInterface } from './interfaces'

import './styles/styles.css'

const TodoListApp = () => {
    const [todos, setTodos] = useState<TodoInterface[]>([])
    const [loading, setLoading] = useState<Boolean>(false)

    useEffect(() => {
        console.log('Fetching data...');

        async function fetchData() {
            setLoading(true);

            const response = await axios('/Customer');

            setTodos(response.data);
            setLoading(false);
        }

        fetchData();
    }, []);

    // Creating new todo item
    const handleTodoCreate = (todo: TodoInterface) => {
        const newTodosState: TodoInterface[] = [...todos]

        axios.post(`/Customer`, todo).then(() => {
            newTodosState.push(todo)
            setTodos(newTodosState)
        }).catch(err => console.log(err))
    }

    // Update existing todo item
    const handleTodoUpdate = (name: string, id: string) => {
        axios.put(`/Customer/${id}`,
            {
                name: name
            }
        ).catch(err => console.log(err))
        
        const newTodosState: TodoInterface[] = [...todos]
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = name
        setTodos(newTodosState)
    }

    // Remove existing todo item
    const handleTodoRemove = (id: string) => {
        axios.delete(`/Customer/${id}`).then(() => {
            const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
            setTodos(newTodosState)
        }).catch(err => console.log(err))
    }

    // Check existing todo item as completed
    const handleTodoComplete = (id: string) => {
        const newTodosState: TodoInterface[] = [...todos]

        axios.put(`/Customer/${id}`,
            {
                isManager: !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isManager
            }
        )

        newTodosState.find((todo: TodoInterface) => todo.id === id)!.isManager = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isManager

        setTodos(newTodosState)
    }

    // Check if todo item has title
    const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
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

            {loading ? <h5 className="text-center">Loading...</h5> :
                <TodoList
                    todos={todos}
                    handleTodoUpdate={handleTodoUpdate}
                    handleTodoRemove={handleTodoRemove}
                    handleTodoComplete={handleTodoComplete}
                    handleTodoBlur={handleTodoBlur}
                />
            }
        </div>
    )
}

export default TodoListApp;