import './App.css';
import data from './data.json';
import React, { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  // State
  const [toDoList, setToDoList] = useState(data);

  // Functions
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy.push({ id: toDoList.length + 1, task: userInput, complete: false });
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header Text="To Do List" />
      <Todo
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
