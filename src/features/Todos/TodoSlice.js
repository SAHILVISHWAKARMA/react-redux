import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const dummy = () => {
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(console.log);
}
export const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async (_, thunkAPI) => {
        const res = await fetch('https://dummyjson.com/todos');
        const data = await res.json();
        return data.todos;
    }
)
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        loading: false
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                todo: action.payload.comment
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        }),
            builder.addCase(fetchTodos.pending, (state, action) => {
                console.log("pending");
            }),
            builder.addCase(fetchTodos.rejected, (state, action) => {
                console.log("error");
            })
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer; 