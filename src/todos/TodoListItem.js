import './TodoListItem.css';

export const TodoListItem = ({ todo, onCompleteTodo, onRemoveTodo }) => {
  const { id, title, date_created, is_completed } = todo;
  return (
    <li key={id} className='todo-list-item'>
      <div className='todo-title-wrapper'>
        <p className='todo-title'>{title}</p>
        <p className='todo-date-created'>{date_created}</p>
      </div>
      <p className='todo-is-completed'>{is_completed ? 'completed' : 'pending'}</p>
      <div className='todo-buttons-wrapper'>
        <button className='todo-button-complete' type='button' onClick={() => onCompleteTodo(title)}>Completed</button>
        <button className='todo-button-remove' type='button' onClick={() => onRemoveTodo(title)}>Remove</button>
      </div>
    </li>
  );
};