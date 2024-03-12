import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './TodoForm.css';

export const TodoForm = ({ todos, onCreateTodo }) => {
    const [title, setTitle] = useState('');
    const onFormSubmit = e => {
        e.preventDefault();
        const isDuplicate = todos.some(todo => todo.title === title);
        if (!isDuplicate) {
            onCreateTodo(title);
            setTitle('');
        }
        document.getElementById('todo-form-title-input').focus();
    };
    return (
        <div className='container'>
            <h2 className='todo-form-heading-text'>Todo Form</h2>
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
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onCreateTodo: title => dispatch(createTodo(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);