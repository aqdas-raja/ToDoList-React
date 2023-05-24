// import React from "react";

// const TodoList = () => {
//     const [toDoList, setToDoList] = useState();
  
//     const handleToggle = (id) => {
//       let mapped = toDoList.map(task => {
//         return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
//       });
//       setToDoList(mapped);
//     };
  
//     const handleFilter = () => {
//       let filtered = toDoList.filter(task => {
//         return task.complete;
//       });
//       setToDoList(filtered);
//     };
  
//     const addTask = (userInput) => {
//       let copy = [...toDoList];
//       copy.push({ id: toDoList.length + 1, task: userInput, complete: false });
//       setToDoList(copy);
//     };
  
//     return (
//       <div>
//         <Header Text="To-Do List" />
//         <Todo
//           toDoList={toDoList}
//           handleToggle={handleToggle}
//           handleFilter={handleFilter}
//           addTask={addTask}
//         />
//       </div>
//     );
//   };
  
//   export default TodoList;
  