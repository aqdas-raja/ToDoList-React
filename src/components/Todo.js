// import React from 'react'

//  const Todo = ({toDoList, handleToggle, handleFilter}) => {
//     return (
//         <div id='container'>
//             <h1>This is toDoList</h1>
//         </div>
//     )
// }

// export default Todo;

import React from 'react';

const Todo = ({ toDoList, handleToggle, handleFilter, addTask }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const userInput = e.target.task.value;
    if (userInput.trim() !== '') {
      addTask(userInput);
      e.target.reset();
    }
  };

  return (
    <div id="container">
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {toDoList.map(task => (
          <li
            key={task.id}
            className={task.complete ? 'completed' : ''}
            onClick={() => handleToggle(task.id)}
          >
            {task.task}
          </li>
        ))}
      </ul>

      <button onClick={handleFilter}>Filter Completed Tasks</button>
    </div>
  );
};

export default Todo;

