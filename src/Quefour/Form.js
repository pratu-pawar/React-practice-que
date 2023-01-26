import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, Setinput, todos, Settodos, edittodo, Setedittodo }) => {

  const updateTodo = (title, id, completed) => {
    const newtodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    );
    Settodos(newtodo);
    Setedittodo("");
  };

  const onInputChange = (event) => {
    Setinput(event.target.value);
  };

  const onFromSubmit = (event) => {
    event.preventDefault();
    if (!edittodo) {
      Settodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      Setinput("");
    } else {
      updateTodo(input, edittodo.id, edittodo.completed);
    }
  };
  return (
    <div>
      <form onSubmit={onFromSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        ></input>
        <button className="buttom-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
