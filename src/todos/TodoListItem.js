import './TodoListItem.css';

export const TodoListItem = ({ todo, onCompletePressed, onRemovePressed }) => (
  <li key={todo.id} className='todo-list-item'>
      <div className='todo-title-wrapper'>
        <p className='todo-title'>{todo.title}</p>
        <p className='todo-date-created'>{todo.date_created}</p>
      </div>
      <p className='todo-is-completed'>{todo.is_completed ? 'completed' : 'pending'}</p>
      <div className='todo-buttons-wrapper'>
        <button className='todo-button-complete' type='button' onClick={() => onCompletePressed(todo.title)}>Completed</button>
        <button className='todo-button-remove' type='button' onClick={() => onRemovePressed(todo.title)}>Remove</button>
      </div>
    </li>
  );