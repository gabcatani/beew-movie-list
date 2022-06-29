import React from 'react';
import '../scss/_todo.scss'
import TodoList from '../components/todo-list/TodoList.jsx'


const List = () => {
    return (
        <div className='todo-app'>
            <TodoList />
        </div>
    )
}

export default List;
