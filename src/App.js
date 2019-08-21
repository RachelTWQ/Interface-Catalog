import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [entry, setEntry] = useState("");
  const [todos, setTodos] = useState([]);

  function handleEnter(event) {
    if (event.key === "Enter"){
      let date = new Date();
      let timestamp = date.getTime();
      handleSubmit(timestamp);
      event.target.value = "";
    }
  }

  function handleSubmit(timestamp) {
    let medium = [];
    medium.push(...todos, {content:entry, time: timestamp});
    setTodos(medium); 
  }

  function removeToDo(event) {
    console.log(event.target.id)
  }

  return (
    <div className="App">
      <main>
        <h3>To Do List</h3>
        {todos && todos.length ? todos.map(el => (<p key={el.time}><span id={el.time} onClick={removeToDo}>{el.content}</span></p>)) : (<p>Nothing to do Yay!</p>)}
        <input type="text" placeholder="What to do next?" onChange= {(e) => setEntry(e.currentTarget.value)} onKeyDown={handleEnter} />
      </main>
    </div>
  );
}

export default App;
