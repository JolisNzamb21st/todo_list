import React, { useState } from 'react';
import './TodoList.css';
//initialization of states
const TodoList = () => {
    const [todos,setTodos]=useState([]); //the todos state will represent a list of to do items
    const [headingInput, setHeadingInut] = useState(''); // headingInput represents the value entered by the user for adding a new to do item.
    const [listInputs,setListInputs] = useState({}); //This state will hold the value of input fields for each todo item individually.
    
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };
     const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: '' });
        }
    };
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value });
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
                            <h3>{todo.heading}</h3>
                            <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
                        </div>
                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p>{list}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='add_list'>
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''}
                                onChange={(e) => handleListInputChange(index, e.target.value)}
                            />
                            <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                        </div>
                    </div>
                ))}
            </div>
    </>
  );
};

export default TodoList;
