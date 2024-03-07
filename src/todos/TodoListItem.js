import './TodoListItem.css';

export const TodoListItem = ({ id, title, date_created, is_completed, todos, setTodos }) => {
    const markComplete = () => {
      const newTodos = todos.map(todo => {
        if (todo.title === title) {
          todo.is_completed = true;
        }
        return todo;
      });
      setTodos(newTodos);
    };
    return (
      <li key={id} className='todo-list-item'>
        <div className='todo-title-wrapper'>
          <p className='todo-title'>{title}</p>
          <p className='todo-date-created'>{date_created}</p>
        </div>
        <p className='todo-is-completed'>{is_completed ? 'completed' : 'pending'}</p>
        <div className='todo-buttons-wrapper'>
          <button className='todo-button-complete' type='button' onClick={markComplete}>Completed</button>
          <button className='todo-button-remove' type='button' onClick={() => {
            const newTodos = todos.filter(todo => todo.title !== title);
            setTodos(newTodos);
          }}>Remove</button>
        </div>
      </li>
    );
  };