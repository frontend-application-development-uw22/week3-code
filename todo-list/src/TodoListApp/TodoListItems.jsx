import React from 'react';
import PropTypes from 'prop-types';

function TodoListItems({ todoList, toggleCompleted, deleteTodo }) {
    const items = todoList.map((todo, idx) => {
        return (
            <li
                key={idx}
                // style={{
                //     textDecoration: todo.isCompleted ? 'line-through' : 'initial'
                // }}
                className={todo.isCompleted ? 'todo-item-completed' : 'todo-item'}
            >
                <span>{todo.text}</span>
                <button onClick={() => toggleCompleted(idx)}>Completed</button>
                <button onClick={() => deleteTodo(idx)}>Delete</button>
            </li>
        );
    });
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

TodoListItems.propTypes = {
    todoList: PropTypes.arrayOf(
        // PropTypes.shape({
        //     text: PropTypes.string.isRequired,
        //     isCompleted: PropTypes.bool.isRequired,
        // })
        PropTypes.object
    ).isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default TodoListItems;
