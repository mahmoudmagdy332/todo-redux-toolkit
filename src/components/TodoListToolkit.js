import { useState } from "react";
import { useSelector,useDispatch  } from "react-redux";
import { AddTaskAction} from "../redux/TodoAction";
import { Task } from "./Task";


export const TodoListToolkit = () => {
    const despatsh=useDispatch()
    const {TaskList,count}=useSelector((state)=>state.TodoReduser);
    const [task,setTask]=useState('');
    const AddTaskHandle=()=>{
        AddTaskAction(despatsh,task);
        setTask('');
    }
    
  return (
  <>
    <div className="container-task">
            <div className=" add-task">
              
                    <input className="text" type="text" name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
                    <input className="sub" type="submit" value="AddTask" onClick={AddTaskHandle}/>
                
            </div>
            <div className="tasks">
                { count ? TaskList.map((task,indx)=>
                    (
                    <Task task={task} indx={indx} key={indx}/>
                    )
                    ):<p style={{textAlign:'center',color:'red'}}>
                        dont fount any Task
                     </p>}   
            </div>
        </div>
        
        </>
  )
}
