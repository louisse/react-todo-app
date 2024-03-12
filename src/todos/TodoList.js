import { TodoListItem } from './TodoListItem';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from './actions';
import './TodoList.css';

export const TodoList = ({ todos, onCompleteTodo, onRemoveTodo }) => (
  <div className='container'>
    <div className='todo-list-wrapper'>
      <h2 className='todo-list-heading-text'>Todo List</h2>
      {
        (!todos.length)
          ? <div>Empty</div>
          : <ul className='todo-list'>
            {todos.map((todo, id) => (<TodoListItem id={id} todo={todo} onCompleteTodo={onCompleteTodo} onRemoveTodo={onRemoveTodo} />))}
          </ul>
      }
    </div>
  </div>
);

const mapStatetoProps = state => ({
  todos: state.todos
});

const mapDispatchtoProps = dispatch => ({
  onCompleteTodo: title => dispatch(completeTodo(title)),
  onRemoveTodo: title => dispatch(removeTodo(title))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(TodoList);