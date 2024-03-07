import { Fragment, useState } from 'react';
import { TodoList } from './todos/TodoList';
import { TodoForm } from './todos/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <Fragment>
      <header>
        <div className='container todo-list-heading'>
          <h1 className='todo-list-heading-text'>Todo App</h1>
        </div>
      </header>
      <div className='container todo-form-wrapper'>
        <h2 className='todo-list-heading-text'>Todo Form</h2>
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <div className='container todo-list-wrapper'>
        <h2 className='todo-list-heading-text'>Todo List</h2>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <footer>
        <div className='container'>&copy; Copyright 2024</div>
      </footer>
    </Fragment>
  );
}

export default App;
