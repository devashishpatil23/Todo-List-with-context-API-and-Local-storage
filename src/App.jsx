import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { TodoProvider } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { ...todo }]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id == id ? { ...prevTodo, todo: todo } : prevTodo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="container">
      <TodoProvider
        value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
      >
        <Form />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} id={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </TodoProvider>
      </div>
    </>
  );
}

export default App;
