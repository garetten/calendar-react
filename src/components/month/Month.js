import React from 'react';
import Day from '../day/Day';


import './month.scss';

export default function Month({month}) {
  return (
    <div className='month'>
      <div className="month__container">
      {
        month.map((row,i)=>(
          <React.Fragment key={i}>
            {row.map((day,idx)=>(
              <Day day={day} key={idx}/>
            ))}
          </React.Fragment>
        ))
      }
      </div>
    </div>
  )
}
