import { createSlice } from "@reduxjs/toolkit";

let TaskSlicer = createSlice({
    name: "Task",
    initialState:[],
    reducers: {
        AddTask: (state, action) => {
            state.push(action.payload);
        },
        DeleteTask: (state,action)=>{
            state.splice(action.payload,1)
            console.log(state);

        }
    }
});


export default TaskSlicer.reducer
export const {AddTask,DeleteTask} = TaskSlicer.actions