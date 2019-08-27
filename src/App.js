import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './reducer';
import './App.css';

function App() {
  
  const [entry, setEntry] = useState("");
  const [todos, setTodos] = useState([]);

  function handleEnter(event) {
    if (event.key === "Enter"){
      let date = new Date();
      let timestamp = date.getTime();
      addTodoItem(timestamp);
      event.target.value = "";
    }
  }

  function addTodoItem(timestamp) {
    let medium = [];
    medium.push(...todos, {content:entry, time: timestamp});
    setTodos(medium); 
  }

  function removeTodoItem(event) {
    let filteredToDos = todos.filter(todo => todo.time.toString() !== event.target.id);
    setTodos(filteredToDos);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <h3>To Do List</h3>
          {todos && todos.length ? todos.map(todo => (<p key={todo.time} id={todo.time} onClick={removeTodoItem}>{todo.content}</p>)) : (<p>Nothing to do Yay!</p>)}
          <input type="text" placeholder="What to do next?" onChange= {(e) => setEntry(e.currentTarget.value)} onKeyDown={handleEnter} />
        </main>
      </div>
    </Provider>
  );
}

export default App;
