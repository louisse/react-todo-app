export const CREATE_TODO = 'create_todo';
export const createTodo = title => ({
    type: CREATE_TODO,
    payload: { title }
});

export const COMPLETE_TODO = 'complete_todo';
export const completeTodo = title => ({
    type: COMPLETE_TODO,
    payload: { title }
});

export const REMOVE_TODO = 'remove_todo';
export const removeTodo = title => ({
    type: REMOVE_TODO,
    payload: { title }
});