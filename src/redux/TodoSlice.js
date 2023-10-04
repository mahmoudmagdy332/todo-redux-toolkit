import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
let initialState={
    count:0,
    TaskList:[]
}
if(window.localStorage.TasksList){
    const tasksList=JSON.parse(window.localStorage.TasksList);
    initialState={
        count:tasksList.length,
        TaskList:tasksList
    }
}
export const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            if(action.payload){
                const task={
                    id:Date.now(),
                    content:action.payload,
                    active:true
                }
               state.TaskList.push(task); 
               state.count+=1;
               window.localStorage.setItem("TasksList",JSON.stringify(state.TaskList));
            }
        },
        deleteTask:(state,action)=>{
            state.TaskList=state.TaskList.filter((_,idx)=>idx!==action.payload);
            state.count-=1;
            window.localStorage.setItem("TasksList",JSON.stringify(state.TaskList));
        },
        editTask:(state,action)=>{
            if(action.payload.task){
                state.TaskList=state.TaskList.map((item,indx)=>{
                    if(indx===action.payload.index){
                        item.content=action.payload.task;
                    }
                    return item;
                })
                window.localStorage.setItem("TasksList",JSON.stringify(state.TaskList));
            }
        }
    }
})

export const {addTask,deleteTask,editTask} = TodoSlice.actions;
 
export default TodoSlice.reducer;
