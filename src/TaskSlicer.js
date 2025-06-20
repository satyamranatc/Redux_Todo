import { createSlice } from "@reduxjs/toolkit";

let TaskSlicer = createSlice({
    name:"Task",
    initialState:[],
    reducers:{
        addTask : (state,action)=>{
            state.push(action.payload)
        },
        deleteTask:(state,action)=>{
            state.splice(action.payload,1)
        }
    }
});

export default TaskSlicer.reducer;
export let {addTask,deleteTask} = TaskSlicer.actions;