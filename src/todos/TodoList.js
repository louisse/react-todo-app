import { TodoListItem } from './TodoListItem';
import './TodoList.css';

export const TodoList = ({ todos, setTodos }) => (
  <div className='container'>
    <div className='todo-list-wrapper'>
      <h2 className='todo-list-heading-text'>Todo List</h2>
      {
        (!todos.length)
          ? <div>Empty</div>
          : <ul className='todo-list'>
            {todos.map((todo, id) => (<TodoListItem id={id} {...todo} todos={todos} setTodos={setTodos} />))}
          </ul>
      }
    </div>
  </div>
);
