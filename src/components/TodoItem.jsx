import React, { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const { deleteTodo, toggleComplete, updateTodo } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, newTodo);
    setIsEdit(false);
  };
  return (
    <>
      <div className="list-box">
        <input
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          type="checkbox"
        />{" "}
        <span>
          <input
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
            readOnly={!isEdit}
            type="text"
            className={`${todo.completed?'complete ':""} ${!isEdit?"":"input-outline"} `}
           
          />
        </span>{" "}
        <span>
          <button
            onClick={() => {
              if (todo.completed) return;
              if (isEdit) {
                editTodo();
              } else {
                setIsEdit((prev) => !prev);
              }
            }}
            disabled={todo.completed}
          >
            {isEdit ? "Save" : "Edit"}
          </button>{" "}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </span>
      </div>
    </>
  );
}

export default TodoItem;
