/* eslint-disable no-unused-vars */
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useContext } from "react";
import { TypeContext } from '../contexts/TypeContext';

export default function ToggleButtons() {
  
  const [alignment, setAlignment] =useState('الكل');
  const {type, setType} = useContext(TypeContext);

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    };
  }

  const allTypeButtonHandler = () => {
    setType("all");
  }

  const finishedTypeButtonHandler = () => {
    setType("finished");
  }
  
  const unfinishedTypeButtonHandler = () => {
    setType("unfinished");
  }

  return (
    <>
        <ToggleButtonGroup
      value={alignment}
      onChange={handleChange}
      exclusive
      aria-label="TasksType"
    >
      <ToggleButton className='ToggleButton btn-effect' value="غير منجز" onClick = {unfinishedTypeButtonHandler}>غير منجز</ToggleButton>
      <ToggleButton className='ToggleButton btn-effect' value="منجز" onClick = {finishedTypeButtonHandler}>منجز</ToggleButton>
      <ToggleButton className='ToggleButton btn-effect' value="الكل" onClick ={allTypeButtonHandler}>الكل</ToggleButton>
    </ToggleButtonGroup>
 
    </>
)
};
