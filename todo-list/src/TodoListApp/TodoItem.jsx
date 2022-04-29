import React from 'react';

function TodoItem({ todo, onCompleted, onDelete }) {
    return (
        <li
            className={todo.isCompleted ? 'todo-item-completed' : 'todo-item'}
        >
            <span>{todo.text}</span>
            <button onClick={onCompleted}>Completed</button>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;