import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Fragment } from "react";

const Todo = () => (
  <Fragment>
    <header>
      <div className="container">
        <div className="todo-app-heading">
          <h1 className="todo-app-heading-text">Todo App</h1>
        </div>
      </div>
    </header>
    <TodoForm />
    <TodoList />
    <footer>
      <div className="container">&copy; Copyright 2024</div>
    </footer>
  </Fragment>
);

export default Todo;
