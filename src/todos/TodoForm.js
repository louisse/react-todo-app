import { useState } from "react";
import './TodoForm.css';

export const TodoForm = ({ todos, setTodos }) => {
    const [title, setTitle] = useState('');
    const onFormSubmit = e => {
        e.preventDefault();
        const todo = { title, date_created: (new Date()).toISOString().substring(0, 10), is_completed: false };
        const newTodos = todos.concat(todo);
        setTodos(newTodos);
        setTitle('');
        document.getElementById('todo-form-title-input').focus();
    };
    return (
        <form onSubmit={onFormSubmit}>
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