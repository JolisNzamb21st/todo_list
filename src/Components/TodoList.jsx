import React, { useState } from 'react';
import './TodoList.css';
//initialization of states
const TodoList = () => {
    const [todos,setTodos]=useState([]); //the todos state will represent a list of to do items
    const [headingInput, setHeadingInut] = useState(''); // headingInput represents the value entered by the user for adding a new to do item.
    const [listInputs,setListInputs] = useState({}); //This state will hold the value of input fields for each todo item individually.
    
    const handleAddTodo = () =>{
        if(headingInput.trim() !==''){
            setTodos([...todos,{heading:headingInput,lists:[]}]);
            setHeadingInut('');
        }  
    };

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
            value={headingInput}
            // Adding onChange event handler to update headingInput state
            onChange={(e) => {setHeadingInut(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add</button>
        </div>
      </div>
      <div className="todo_main">
            {todos.map((todo, index) => (
            <div key={index} className="todo-card">
                <div className="heading_todo">
                    <h3>{todo.heading}</h3> {/* Display the heading here */}
                    <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                </div>
            </div>))
            } 
      </div>
    </>
  );
};

export default TodoList;
