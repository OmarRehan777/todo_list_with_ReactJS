/* eslint-disable no-unused-vars */
import "../cssFiles/AddEditOverlay.css";
import {ModeContext} from "../contexts/ModeContext";
import {TasksListContext} from "../contexts/TasksListContext";
import {TaskContext} from "../contexts/TaskContext";
import { useContext } from "react";
import { useRef} from "react";
// import { useState } from "react";


export default function AddEditOverlay() {

  let {mode, setMode} = useContext(ModeContext);
  let {tasksDataList, setTasksDataList} = useContext(TasksListContext);
  let {taskData, setTaskData} = useContext(TaskContext);




  let title;
  if (mode == "add"){
    title = "إضافة مهمة";
  }
  else if (mode == "edit"){
    title = "تعديل مهمة ";
  }

  

  const defaultModeHandler = () => {setMode("default");};
  const defaultModeHandlerForOverlay = (e) => { if (e.target.classList.contains("full-screen")){setMode("default");}};


  // counter for adding new task with unique id
  let listId = useRef(0);


  const addHandler = () => {
    // if neither the title or the description is empty
    if (taskData.title && taskData.description){
      let newTask = {...taskData, id : listId.current, progress: "unfinished"};
      setTaskData( (prev) => { return newTask });
      setTasksDataList(prev => [...prev, newTask]);
      listId.current++ ;
    }

    defaultModeHandler();
}


const editHandler = () => {
  let [originalTaskData] = tasksDataList.filter((task) => task.id == taskData.id);

  // if there is no change in the task, just ignore
  if (originalTaskData.title == taskData.title && originalTaskData.description == taskData.description){
    defaultModeHandler();
  }

  // if there is a change in the task, update
  else {
    let newTasksDataList = tasksDataList.map(
      (task) => task.id == taskData.id ? 
      {title : taskData.title, description : taskData.description , id : taskData.id, progress: taskData.progress} : task);

    setTasksDataList( prev => [...newTasksDataList]);
    defaultModeHandler();
  }
}


const confirmButtonHandler = () => {
  if (mode == "add"){
    addHandler();
  }
  else if (mode == "edit"){
    editHandler();
  }
  else {
    defaultModeHandler();
  }
}


  //inputs handlers
  const inputHandler = (e) => {setTaskData({...taskData, title : e.target.value})};
  const textAreaHandler = (e) => {setTaskData({...taskData, description : e.target.value})};
  

  return (
    <div className="full-screen" 
    style={mode == "default" ? {display : "none"} : {display : "flex"}}
    onClick={defaultModeHandlerForOverlay}>

      <div className="add-window">
        <div className="title">{title}</div>

        <label htmlFor="name" className="name-label">العنوان</label>

        <input type="text" className="name field" id="name" 
        value={taskData.title} onChange={inputHandler}/>

        <label htmlFor="description" className="description-label">الوصف</label>

        <textarea type="text" className="description field" id="description" 
        value = {taskData.description} onChange={textAreaHandler}/>

        <button className="cancel-btn btn-effect" onClick={defaultModeHandler}>إلغاء</button>
        <button className="add-edit-btn btn-effect" onClick={confirmButtonHandler}>تأكيد</button>

      </div>
    </div>
  )
}
