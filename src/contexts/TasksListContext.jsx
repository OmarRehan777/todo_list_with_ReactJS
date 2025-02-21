/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export let TasksListContext = createContext([]);



export function TasksListProvider({children}) {

    const localStorageValueFetchingHandler = () => {
        let localStorageValue = localStorage.getItem("tasksDataList");
        return  localStorageValue ? JSON.parse(localStorageValue) : [];
      }

  const [tasksDataList, setTasksDataList] = useState(localStorageValueFetchingHandler);

    // storing data into local storage
    useEffect(() => {
        localStorage.setItem("tasksDataList", JSON.stringify(tasksDataList));
      }, [tasksDataList]);
    

  return (
    <TasksListContext.Provider value = {{tasksDataList, setTasksDataList}}> {children} </TasksListContext.Provider>
)
}
