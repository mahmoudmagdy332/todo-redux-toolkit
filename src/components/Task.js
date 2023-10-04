import { useSelector,useDispatch  } from "react-redux";
import { DeleteTaskAction, UpdateTaskAction } from "../redux/TodoAction";
import { useState } from "react";

export const Task = ({task,indx}) => {
    const despatsh=useDispatch()
    const [taskUbdate,setTaskUbdate]=useState('');
    const [show,setShow]=useState(false);
    const [showId,setShowId]=useState();
    const UpdateTaskHundle=()=>{
        UpdateTaskAction(despatsh,taskUbdate,indx);
        setTaskUbdate('');
    }
  return (
    <div  key={indx}>
        <div className='one-task'>
            <h2>{task.content}</h2>
       <div>
          <button onClick={()=>DeleteTaskAction(despatsh,indx)}>Delet</button>
          <button onClick={()=>{setShow(true); setShowId(indx)}}>edit</button>
       </div>
            <div>
        </div>
    </div>
   {show&& showId ===indx &&
     <div className=" add-task">
        <input className="text" type="text" name="task" value={taskUbdate} onChange={(e)=>setTaskUbdate(e.target.value)}/>
        <input className="sub" type="submit" value="UpdateTask" onClick={UpdateTaskHundle} />       
     </div>                         
   }
   
</div>
  )
}
