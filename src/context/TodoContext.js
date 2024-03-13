import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: Date.now(), todo: "apple", completed: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  updateTodo: (id, todo) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
