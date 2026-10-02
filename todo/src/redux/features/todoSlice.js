import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos : []
  },
  reducers: {
  addTodo : (state , action)=>{
  state.todos.push({
    id : Date.now() ,
    text : action.payload,
    completed : false ,
    
  })

  }
   
  }
})

export const { } = todoSlice.actions

export default todoSlice.reducer