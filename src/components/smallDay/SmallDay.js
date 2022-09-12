import React,{useContext}  from 'react';
import GlobalContext from '../../context/GlobalContext'

import'./smalDay.scss';

export default function SmallDay({day,setIsOpenSmallCalendar}) {
    const nowDay = new Date().toLocaleDateString('en-Us',{weekday:'short', day:'numeric'});
    const {setDaySelected,setShowEventModal} = useContext(GlobalContext);
  
    function isCurrentDay(){
      return nowDay === day.toLocaleDateString('en-Us',{weekday:'short', day:'numeric'}) ? 'today' : '';
    }
    function handleClick(e){
        setDaySelected(day); 
        setShowEventModal(true);
        setIsOpenSmallCalendar(false);
    }
    return (
      <div className={`day__small ${isCurrentDay()}`} onClick={(e)=>{handleClick(e)}}>
          <div className={`day__numeric ${isCurrentDay()}`}> {day.toLocaleDateString('en-Us',{day:'numeric'})}</div>
      </div>
    )
}
