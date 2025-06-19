import { createSlice } from "@reduxjs/toolkit";

let TaskSlicer = createSlice({
    name:"Task",
    initialState:[],
    reducers:{
        addTask : (state,action)=>{
            state.push(action.payload)
        }
    }
});

export default TaskSlicer.reducer;
export let {addTask} = TaskSlicer.actions;