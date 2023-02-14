import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import './day.scss';

export default function Day({day}) {

const [dayEvents,setDayEvents] = useState([]);

  const nowDay = new Date().toLocaleDateString('en-Us',{year: 'numeric',weekday:'short', day:'numeric'});
  const {setDaySelected,setShowEventModal,daySelected,savedEvents,setSelectedEvent} 
  = useContext(GlobalContext);


  useEffect(()=>{
      const events = savedEvents.filter((ev)=>{
        ev.day = new Date(ev.day);
        return ev.day?.toLocaleDateString('en-Us',{year: 'numeric',month: 'long',weekday:'short', day:'numeric'}) === day.toLocaleDateString('en-Us',{year: 'numeric',month: 'long',weekday:'short', day:'numeric'})
      })
      setDayEvents(events ? events : [])
  },[savedEvents,day])

  function isSelectedDay(){
    return daySelected.toLocaleDateString('en-Us',{month: 'long',year: 'numeric',weekday:'short', day:'numeric'}) === day.toLocaleDateString('en-Us',{month: 'long',year: 'numeric',weekday:'short', day:'numeric'}) && 'selected__day'
  }
  function isCurrentDay(){
    return nowDay === day.toLocaleDateString('en-Us',{year: 'numeric',weekday:'short', day:'numeric'}) && 'today'
  }
  return (
    <div className={`day ${isSelectedDay()}`} onClick={()=>{setDaySelected(day); setShowEventModal(true) }}>
      <header className='header__day'>
        <div className='day__weekday'>
            {day.toLocaleDateString('en-Us',{weekday:'short'})}
        </div>
        <div className={`day__numeric ${isCurrentDay()}`}> {day.toLocaleDateString('en-Us',{day:'numeric'})}</div>
      </header>
      <section className='day__event'>
          {
            dayEvents.map((even,i)=>(
              <div key={i} className="day__event__item" onClick={()=>setSelectedEvent(even)}>
                  {even.title}
              </div>
            ))
          }
      </section>
    </div>
  )
}
