import React from 'react';
import TodoListApp from './TodoMain'
import axios from 'axios'

axios.defaults.baseURL = 'https://5e75b1629dff12001635417e.mockapi.io';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3 className="text-center">Todo List</h3>
            </header>
            <TodoListApp />
        </div>
    );
}

export default App;
