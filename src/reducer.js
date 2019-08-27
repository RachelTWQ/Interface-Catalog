import { createStore } from 'redux';
import uuid from 'uuid/v1';

const initialState = {
    todos: [
        {
            id: uuid(),
            content: 'Learn Redux',
            isCompleted: true
        },
        {
            id: uuid(),
            content: 'Learn TypeScript',
            isCompleted: false
        }
    ]
};

export const store = createStore(
    reducer,
    initialState
)

const reducer = (state, { type, payload }) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, complete: !todo.complete} : todo)
            }
        case 'DEL_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        default:
            return state;
    }
}

export const addTodoAction = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
});

export const toggleTodoAction = (todoId) => ({
    type: 'TOGGLE_TODO',
    payload: todoId
});

export const deleteTodoAction = (todoId) => ({
    type: 'DEL_TODO',
    payload: todoId
})