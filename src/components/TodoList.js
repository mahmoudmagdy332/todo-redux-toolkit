import React, { useState } from 'react'

const TodoList = () => {
    const [list,setList]=useState([]);
    const [task,setTask]=useState('');
    const [taskUbdate,setTaskUbdate]=useState('');
    const [show,setShow]=useState(false);
    const [showId,setShowId]=useState();

    const addTask=()=>{
        if (task){
            let taskAdded={
                id:Date.now(),
                content:task,
                active:true
              }
              setList([...list,taskAdded]);
        }
    }
    const DeleteTask=(idex)=>{
           setList(list.filter((_,taskIndex)=>taskIndex!==idex));
        }
    const updateTask=()=>{
      const updatedList=list.map((task,idex)=>{
       
        if(idex===showId){
            task.content=taskUbdate;
        }
        return task;
      })
      console.log(updatedList);
      setList(updatedList);
    }
  return (
      <div className="container-task">
            <div className=" add-task">
                  <input className="text" type="text" name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
                  <input className="sub" type="submit" value="AddTask" onClick={addTask}/>
            </div>
            <div className="tasks">
                { list.length ? list.map((task,indx)=>{
                    return (
                        <div  key={indx}>
                            <div className='one-task'>
                            <p>{task.content}</p>
      
                            <button onClick={()=>DeleteTask(indx)}>Delete</button>
                            <button onClick={()=>{setShow(true); setShowId(indx)}}>edit</button>
                            <div>
                            </div>
                            </div>
                           {show&& showId ===indx &&
                             <div >
                             <input className="text" type="text" name="task"  onChange={(e)=>setTaskUbdate(e.target.value)}/>
                             <input className="sub" type="submit" value="UpdateTask" onClick={updateTask} />       
                             </div>                         
                           }
                           
                        </div>
                    )
                }) :<p style={{textAlign:'center',color:'red'}}>dont fount any Task</p>}
            </div>
        </div>
  );
}

export default TodoList
