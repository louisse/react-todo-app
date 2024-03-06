import { Fragment, useState } from 'react';
import './App.css';


const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const onFormSubmit = e => {
    e.preventDefault();
    const todo = { title, date_created: (new Date()).toISOString().substring(0, 10) };
    const newTodos = todos.concat(todo);
    setTodos(newTodos);
    setTitle('');
    document.getElementById('todo-form-title-input').focus();
  };
  return (
    <form
      onSubmit={onFormSubmit}>
      <div className='todo-form-container'>
        <div className='todo-form-title-wrapper'>
          <label htmlFor='todo-form-title-input' className='todo-form-title-label'>Title:</label>
          <input id='todo-form-title-input' className='todo-form-title-input' type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className='todo-form-buttons-wrapper'>
          <button type='submit' className='todo-form-submit'>Submit</button>
        </div>
      </div>
    </form>
  );
};

const TodoList = ({ todos }) => {
  return (!todos.length)
    ? <div>Empty</div>
    : (
      <ul className='todo-list'>
        {todos.map((todo, id) => (<TodoListItem id={id} {...todo} />))}
      </ul>
    );
};

const TodoListItem = ({ id, title, date_created }) => {
  return (
    <li key={id} className='todo-list-item'>
      <div className='todo-title-wrapper'>
        <p className='todo-title'>{title}</p>
        <p className='todo-date-created'>{date_created}</p>
      </div>
      <div className='todo-buttons-wrapper'>
        <button
          className='todo-button-complete'
          type='button'>
          Completed
        </button>
        <button className='todo-button-remove' type='button'>Remove</button>
      </div>
    </li>
  );
};

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
