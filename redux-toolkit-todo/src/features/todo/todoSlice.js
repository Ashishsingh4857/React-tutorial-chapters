import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => state.todos.push(action.payload),
		removeTodo: (state, action) =>
			state.todos.filter(
				(curTodo) => curTodo.id !== action.payload
			),

		updateTodo: (state, action) => {
			state.todos.map((curTodo) => {
				if (curTodo.id === action.payload.id) {
					curTodo.text = action.payload.text;
				}
				return curTodo;
			});
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
