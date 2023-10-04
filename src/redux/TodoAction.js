import { addTask, deleteTask, editTask } from "./TodoSlice"

export const AddTaskAction=(despatsh,task)=>{
   despatsh(addTask(task))
}
export const DeleteTaskAction=(despatsh,index)=>{
    despatsh(deleteTask(index))
}

export const UpdateTaskAction=(despatsh,task,index)=>{
    despatsh(editTask({task:task,index:index}))
}