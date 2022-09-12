import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { getMonth } from '../../utils';
import './smallCalendar.scss';

import SmallDay from '../smallDay/SmallDay';


export default function SmallCalendar({setIsOpenSmallCalendar}) {
    const [matrixMonth,setMatrixMonth] = useState(getMonth());
    const {date,setDate,setDaySelected} = useContext(GlobalContext); 

    function handleChangeDate(e){
        setDate(new Date(e.target.value))

        setDaySelected(new Date(e.target.value))
    }
    useEffect(()=>{
        setMatrixMonth(getMonth(date))
    },[date])
  return (
    <div className='small__calendar'>
        <div className="small__calendar__container">
            <div className="small__calendar__header">
                <input type="month" value ={`${date.toLocaleDateString("en-US",{year:'numeric'})}-${date.toLocaleDateString("en-US",{month:'2-digit'})}`} onChange={e=>handleChangeDate(e)} />
            </div>
        <div className="small__calendar__month">
        {
        matrixMonth.map((row,i)=>(
          <React.Fragment key={i}>
            {row.map((day,idx)=>(
              <SmallDay setIsOpenSmallCalendar={setIsOpenSmallCalendar} day={day} key={idx}/>
            ))}
          </React.Fragment>
        ))
      }
        </div>
      </div>
    </div>
  )
}
