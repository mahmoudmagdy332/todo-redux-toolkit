import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './TodoSlice'
export const store=configureStore({
    reducer:{
        TodoReduser:todoReduser
    }
})