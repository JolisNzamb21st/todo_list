import React, { useState } from 'react';
import './TodoList.css';
//initialization of states
const TodoList = () => {
  const [todos,setTodos]=useState([]); //the todos state will represent a list of to do items
  const [headingInput, setHeadingInut] = useState(''); // headingInput represents the value entered by the user for adding a new to do item.
  const [listInputs,setListInputs] = useState({}); //This state will hold the value of input fields for each todo item individually.


  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Learning Journey Tracker</h1>
        <h3 className="subtitle">Add your lesson</h3>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter your next planed course"
            
          />
          <button className="add-list-button">Add</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
