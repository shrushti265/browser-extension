import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md"
import { ImCheckboxUnchecked } from "react-icons/im";
import { RiTodoLine } from "react-icons/ri"
import { TiInputCheckedOutline } from "react-icons/ti";
// import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"

const Todo = () => {

    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false)
    const [inputTask, setInputTask] = useState(false);
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([]);
    const [isTodoTaskDone, setIsTodoTaskDone] = useState(false);

    const todoModalHandler = () => {
        setIsTodoModalOpen(!isTodoModalOpen);
        setInputTask(false)
    }
    const writeTask = () => {
        setInputTask(true);
        setIsTodoModalOpen(false);
    }
    const taskHandler = (e) => {
        e.preventDefault();
        setTaskList((prev) => [...prev, task]);
        setTask("");
        console.log("check");
    }
    const deleteTaskHandler = (id) =>{
        setTaskList(taskList.filter((el, ind) => ind != id));
    }
    const unChecktaskHandler = (id) => {};
    const checktaskHandler = (id) => {
        
    };

  return (
    <>
      <div className='todo-box'>
        <span style={{fontSize:"30px"}} onClick={todoModalHandler}>TODO</span>
        {isTodoModalOpen && (
            <div className='todo-content flex-center flex-col'>
                <p>No Todo yet</p>
                <button onClick={writeTask}>Add Todo</button>
            </div>
        )}
        {inputTask && (
            <div className='todo-task-content'>
                {taskList.map((el, index) => (
                   <div className='flex-row' key={index}>
                        
                        {isTodoTaskDone ? (
                            <TiInputCheckedOutline 
                                className='uncheck'
                                onClick={() => unChecktaskHandler(index)}
                            /> ) : 
                            (<ImCheckboxUnchecked 
                                className='checked'
                                onClick={() => checktaskHandler(index)}
                            />)
                        }
                        <p className={`todo-task mt-s ${isTodoTaskDone && "todo_task_done"}`}>{el}</p>
                        <MdOutlineDeleteOutline 
                            className="todotask-delte-icon"
                            onClick={() => deleteTaskHandler(index)}
                        />
                   </div> 
                ))}
                <form className='mt-s' onSubmit={(e) => taskHandler(e)}>
                    <input
                        placeholder='Enter task'
                        onChange={(e) => setTask(e.target.value)}
                    />
                </form>
            </div>
        )}
      </div>
    </>
  )
}

export {Todo}
