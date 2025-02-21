/* eslint-disable no-unused-vars */
import {  ThemeProvider } from '@mui/material/styles';
import '../cssFiles/App.css'
import MainComponent from './MainComponent'
import {theme} from "./theme"
import AddEditOverlay from "./AddEditOverlay";
import { ModeProvider } from '../contexts/ModeContext';
import { TasksListProvider } from '../contexts/TasksListContext';
import { TaskProvider } from '../contexts/TaskContext';
import { TypeProvider } from '../contexts/TypeContext';


function App() {

  return (
    <>
      <TypeProvider>
        <TaskProvider >  
          <TasksListProvider  >
            <ModeProvider>
              <ThemeProvider theme={theme}> 
                <MainComponent /> 
                <AddEditOverlay />
              </ThemeProvider>
            </ModeProvider>
          </TasksListProvider>
          </TaskProvider>
          </TypeProvider>
    </>
  )
}

export default App
