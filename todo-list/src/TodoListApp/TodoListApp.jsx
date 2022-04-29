import React, {useState} from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';

function TodoListApp({className}) {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);

    // { text: 'Wash the dishes', isCompleted: false }

    const addItem = (event) => {
        event.preventDefault();

        if (itemToAdd === '') {
            window.alert('You must type in some text');
            return;
        }

        const todo = {
            text: itemToAdd,
            isCompleted: false
        };
        setTodos([...todos, todo]);
        setItemText('');
    }

    const toggleCompleted = (todoIdx) => {
        const todoToUpdate = todos[todoIdx];
        const newTodo = {
            ...todoToUpdate,
            isCompleted: !todoToUpdate.isCompleted
        };
        setTodos([
            ...todos.slice(0, todoIdx),
            newTodo,
            ...todos.slice(todoIdx + 1, todos.length)
        ]);
    };

    const deleteTodo = (todoIdx) => {
        setTodos([
            ...todos.slice(0, todoIdx),
            ...todos.slice(todoIdx + 1, todos.length)
        ]);
    }

    return (
        <div className={className}>
            <h1>Todo List</h1>
            <TodoListForm
                itemToAdd={itemToAdd}
                setItemText={setItemText}
                addItem={addItem}
            />
            <TodoListItems
                todoList={todos}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default TodoListApp;