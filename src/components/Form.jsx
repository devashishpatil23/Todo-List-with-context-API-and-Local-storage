import React, { useState } from "react";
import { useTodo } from "../context";

function Form() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo, completed: false });
    setTodo("");
  };
  return (
    <>
      <h2>Todo List</h2>
      <form action="" onSubmit={add}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add todo"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
