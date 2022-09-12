import { getMonth } from './utils';
import './App.scss';
import { useContext, useEffect, useState } from 'react';
import Month from './components/month/Month';
import Header from './components/header/Header';
import GlobalContext from './context/GlobalContext';
import EventModal from '../src/components/eventModal/EventModal';

function App() {
  const [matrixMonth,setMatrixMonth] = useState(getMonth());
  const {date,showEventModal} = useContext(GlobalContext);
  useEffect(()=>{
    setMatrixMonth(getMonth(date))
  },[date])
  return (
    <div className="App">
        {showEventModal && <EventModal/>}
        <Header></Header>
        <Month month={matrixMonth}></Month>
    </div>
  );
}

export default App;
