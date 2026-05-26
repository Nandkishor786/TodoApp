import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Hello Redux"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{ // it contains properties and functions 
      addTodo:(state,action)=>{
              const todo = {
                id:nanoid(),
                text:action.payload,
              }
              state.todos.push(todo);
      },
      removeTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
      },

     updateTodo: (state, action) => {

  state.todos = state.todos.map((todo) =>

    todo.id === action.payload.id
      ? {
          ...todo,
          text: action.payload.text,
        }
      : todo

  );

},

    },
})

//for using in react components
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;
//for using in redux store
export default todoSlice.reducer;



