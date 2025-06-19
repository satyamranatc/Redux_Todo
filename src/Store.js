import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from "./TaskSlicer.js";

let Store = configureStore({
    reducer:{
        Task: TaskSlicer

    }
})

export default Store;