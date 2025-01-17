/* eslint-disable no-unused-vars */
import "../cssFiles/MainComponent.css"
import Task from "./Task";
import ToggleButtons from "./ToggleButtons";
import { ModeContext } from "../contexts/ModeContext";
import { TasksListContext } from "../contexts/TasksListContext";
import { TaskContext } from "../contexts/TaskContext";
import { TypeContext } from "../contexts/TypeContext";
import { useContext, useState, useEffect } from "react";


export default function MainComponent() {

  let {setMode} = useContext(ModeContext);
  let {tasksDataList} = useContext(TasksListContext);
  let {setTaskData} = useContext(TaskContext);
  let {type} = useContext(TypeContext);

  let [appearingTasksList, setAppearingTasksList] = useState([]);

  // view tasks list based on the state
  useEffect(() => {
    let tmp = [];
    if (type == "all"){
      tmp = [...tasksDataList];
    }
    else if (type == "finished"){
      tmp = tasksDataList.filter((task) => task.progress == "finished");
    }
    else if (type == "unfinished"){
      tmp = tasksDataList.filter((task) => task.progress == "unfinished");
    }
    
    tmp.sort((a,b) => {
      if (a.progress === "unfinished" && b.progress === "finished") return -1;
      if (a.progress === "finished" && b.progress === "unfinished") return 1;
      if (!a.title || !b.title) return 0; // التعامل مع القيم الناقصة
      return a.title.localeCompare(b.title);
    })
  

    setAppearingTasksList(prev => tmp);
  }, [type, tasksDataList])
  
  
  const addModeSwitcher = () => {setMode("add");};

  const addHandler = () => {
    setTaskData({title: "", description: "", id: "", progress: "unfinished"});
    addModeSwitcher()};


  return (
    <>
    
    <div className="window" >

        <div className="window-header">
          <div className="title">قائمة المهام</div>
            <ToggleButtons/>
            </div>  

          <div className="tasks-list">
            {appearingTasksList.map(task => (
    <Task 
    title = {task.title} 
    description = {task.description} 
    id = {task.id} 
    progress = {task.progress} 
    key = {task.id}
    /> ))}
          </div>

    <button  className="add-btn btn-effect" onClick={addHandler}>إضافة مهمة</button>
    </div>
    
    </>
  )
};
