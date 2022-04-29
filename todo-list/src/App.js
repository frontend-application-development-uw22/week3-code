import React from 'react';
import './App.css';
import TodoItem from './TodoListApp/TodoItem';
// import Picture from './Picture';
import TodoListApp from './TodoListApp/TodoListApp';

function App() {
  return (
    <div>
      <TodoListApp />
      {/* this is a comment */}
      {/* <Picture
        src="https://media.giphy.com/media/tIoeLjCZ1Ib3a/giphy.gif"
        alt="Picture of Dave Grohl being sassy"
      /> */}
      <hr />
      <TodoItem
        todo={{text: 'Standalone item', isCompleted: false}}
        onCompleted={() => window.alert('Completed!')}
        onDelete={() => window.alert('Deleted!')}
      />
    </div>
  );
}

export default App;
