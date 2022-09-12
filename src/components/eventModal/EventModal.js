import React, { useContext, useState } from 'react';

import {CgClose} from 'react-icons/cg';
import{AiOutlineDelete} from 'react-icons/ai';
import GlobalContext from '../../context/GlobalContext';


import './eventModal.scss';


export default function EventModal() {
  const {setShowEventModal,daySelected,dispatchEvent,setSelectedEvent,selectedEvent} = useContext(GlobalContext);
  const [title,setTitle] = useState(selectedEvent? selectedEvent.title : '');
  const [description,setDescription] = useState(selectedEvent? selectedEvent.description : '');
  function handleCloseModal(){
    setShowEventModal(false);
    setSelectedEvent(null);
  }


  function deleteEvent(){
    dispatchEvent({type:"delete",payload:selectedEvent});
    setSelectedEvent(null);
    setShowEventModal(false);
  }
  function handleSubmit(e){
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      day: new Date(daySelected),
      id: Date.now()
    }
    if(selectedEvent){
      dispatchEvent({type:"update",payload:calendarEvent});
      setSelectedEvent(null);
      setShowEventModal(false);
      return;
    }
    dispatchEvent({type:'push',payload:calendarEvent});
    setShowEventModal(false)
  }
  return (
    <div className='event__modal'>
        <form className='event__modal__form form'>
            <header className='form__header'>
                <div className="form__header__title">Add new event</div>
                <div className="form__header__icons">
                  {
                    selectedEvent && <AiOutlineDelete size='25px' color='grey' onClick={deleteEvent}></AiOutlineDelete>
                  }
                  <CgClose onClick={()=>handleCloseModal()} size='30px' color='black'></CgClose>
                </div>
            </header>
            <input className='form__title' type ='text' placeholder='Title goes here' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <textarea className='form__description'  name="textArea" placeholder='Description' cols="30" rows="10" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            <footer className='form__footer'>
                <div className="event__modal__date">{daySelected.toLocaleDateString("en-US")}</div>
                <button className='form__footer__button' onClick={handleSubmit}>Save</button>
            </footer>
        </form>
    </div>
  )
}
