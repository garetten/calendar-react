import React, { useState } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import GlobalContext from './GlobalContext';

function eventReducer(state,action){
  switch(action.type){
    case "push":
      return [...state,action.payload];
    case "update":
      return state.map(evt=>evt.id === action.payload.id ? action.payload : evt);
    case "delete":
      return state.filter(evt=>evt.id !== action.payload.id);
    default:
      return state;
  }
}

function initEventsValue(){
  const storageEvents = localStorage.getItem('saveEvents');
  const parseEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parseEvents;
}
export default function ContextWrapper(props) {
    const [date,setDate] = useState(new Date());
    const [showEventModal,setShowEventModal] = useState(false);
    const [daySelected,setDaySelected] = useState(new Date());
    const [selectedEvent,setSelectedEvent] = useState(null);

    const [savedEvents,dispatchEvent] = useReducer(eventReducer,[],initEventsValue);


    useEffect(()=>{
      localStorage.setItem("saveEvents",JSON.stringify(savedEvents))
    },[savedEvents])

  return (
    <GlobalContext.Provider value={{ 
      date, 
      setDate,
      showEventModal,
      setShowEventModal,
      daySelected,
      setDaySelected,
      dispatchEvent,
      savedEvents,
      setSelectedEvent,
      selectedEvent}}>
        {props.children}
    </GlobalContext.Provider>
  )
}
