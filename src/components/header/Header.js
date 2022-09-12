import React, { useContext, useState } from 'react';
import {AiFillPlusCircle,AiFillCalendar} from 'react-icons/ai';
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';
import GlobalContext from '../../context/GlobalContext';
import SmallCalendar from '../smallCalendar/SmallCalendar';

import './header.scss';

export default function Header() {
  const {date,setDate,setShowEventModal} = useContext(GlobalContext)
  const [isOpenSmallCalendar,setIsOpenSmallCalenar] = useState(false);
  function handlePrevMonth(){
    setDate(new Date(date.getFullYear(),date.getMonth()-1))
  }
  function handleNextMonth(){
    setDate(new Date(date.getFullYear(),date.getMonth()+1))
  }

  function openSmallCalendar(){
    setIsOpenSmallCalenar(!isOpenSmallCalendar)
   
  }
  return (
    <header className="header">
      <div className="header__newEvent"><AiFillPlusCircle onClick={()=>setShowEventModal(true)} size='30px' color='blue'/></div>
      <div className="header__month">
        <div className="change__month">

          <div className="mont__now">{date.toLocaleDateString('en-Us',{month:'long',year:'numeric'})}</div>
          <BiChevronLeft size='27px' onClick={()=>handlePrevMonth()}></BiChevronLeft>
          <BiChevronRight size='27px' onClick={()=>handleNextMonth()}>
          </BiChevronRight>
        </div>
        <div className="data__picker">
          <AiFillCalendar className="data__picker__calendar"onClick={()=>openSmallCalendar()} size="30px" color="blue"/>
          { isOpenSmallCalendar && <SmallCalendar setIsOpenSmallCalendar={setIsOpenSmallCalenar}></SmallCalendar>}
        </div>
      </div>
    </header>
  )
}
