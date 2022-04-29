import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoListItems({ todoList, toggleCompleted, deleteTodo }) {
    const items = todoList.map((todo, idx) => {
        return (
            <TodoItem
                key={idx}
                todo={todo}
                onCompleted={() => toggleCompleted(idx)}
                onDelete={() => deleteTodo(idx)}
            />
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
