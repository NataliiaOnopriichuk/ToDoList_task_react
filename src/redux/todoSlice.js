import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, { payload }) {
            return [...state, { id: state.length + 1, ...payload }]

        },
        changeStatus(state, { payload: { id, status } }) {
            return state.map(todo =>
                todo.id === id ? { ...todo, status } : todo
            )
        },
    }
});


export const { addTodo, changeStatus } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

