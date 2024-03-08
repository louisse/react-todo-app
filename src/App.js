import { Fragment, useState } from 'react';
import { TodoList } from './todos/TodoList';
import { TodoForm } from './todos/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <Fragment>
      <header>
        <div className='container'>
          <div className='todo-app-heading'>
            <h1 className='todo-app-heading-text'>Todo App</h1>
          </div>
        </div>
      </header>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <footer>
        <div className='container'>&copy; Copyright 2024</div>
      </footer>
    </Fragment>
  );
}

export default App;
