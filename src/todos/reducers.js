import { CREATE_TODO, COMPLETE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { title } = payload;
            const newTodo = { title, date_created: (new Date()).toISOString().substring(0, 10), is_completed: false };
            return state.concat(newTodo);
        }
        case COMPLETE_TODO: {
            const { title } = payload;
            const markComplete = todo => (
                (todo.title === title)
                 ? {...todo, is_completed: true} 
                 : todo
            );
            return state.map(markComplete);
        }
        case REMOVE_TODO: {
            const { title } = payload;
            return state.filter((todo) => todo.title !== title);
        }
        default: {
            return state;
        }
    }
}