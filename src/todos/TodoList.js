import { TodoListItem } from './TodoListItem';
import './TodoList.css';

export const TodoList = ({ todos, setTodos }) => (
    (!todos.length)
    ? <div>Empty</div>
    : (
      <ul className='todo-list'>
        {todos.map((todo, id) => (<TodoListItem id={id} {...todo} todos={todos} setTodos={setTodos} />))}
      </ul>
    )
);
