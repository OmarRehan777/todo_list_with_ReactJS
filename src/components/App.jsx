/* eslint-disable no-unused-vars */
import {  ThemeProvider } from '@mui/material/styles';
import '../cssFiles/App.css'
import MainComponent from './MainComponent'
import {theme} from "./theme"
import AddEditOverlay from "./AddEditOverlay";
import { useState, useEffect } from 'react';
import { ModeContext } from '../contexts/ModeContext';
import { TasksListContext } from '../contexts/TasksListContext';
import { TaskContext } from '../contexts/TaskContext';
import { TypeContext } from '../contexts/TypeContext';

function App() {


  const localStorageValueFetchingHandler = () => {
    let localStorageValue = localStorage.getItem("tasksDataList");
    return  localStorageValue ? JSON.parse(localStorageValue) : [];
  }


  const [mode, setMode] = useState("default");
  const [taskData, setTaskData] = useState({title : "", description : "", id : "", progress : ""});
  const [tasksDataList, setTasksDataList] = useState(localStorageValueFetchingHandler);
  const [type, setType] = useState("all");


  // storing data into local storage
  useEffect(() => {
    localStorage.setItem("tasksDataList", JSON.stringify(tasksDataList));
  }, [tasksDataList]);


  return (
    <>
      <TypeContext.Provider value={{type, setType}} >
        <TaskContext.Provider value= {{taskData, setTaskData}}>  
          <TasksListContext.Provider value = {{tasksDataList, setTasksDataList}} >
            <ModeContext.Provider value = {{mode, setMode}}>
              <ThemeProvider theme={theme}> 
                <MainComponent /> 
                <AddEditOverlay />
              </ThemeProvider>
            </ModeContext.Provider>
          </TasksListContext.Provider>
          </TaskContext.Provider>
          </TypeContext.Provider>
    </>
  )
}

export default App
