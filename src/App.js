import React, { useState, useEffect } from 'react';
import DateView from './components/DateView';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const App = () => {
  
  const [date, setDate] = useState(new Date())
  const [dateNumber, setDateNumber] = useState(null)
  const [dateMonth, setDateMonth] = useState(null)

  useEffect(() => {
    let number = (date.getDate() < 10 ? '0' : '') + date.getDate()
    let month = date.toLocaleString('default', { month: 'long' })
    setDateNumber(number)
    setDateMonth(month)
  }, [date])

  const changeDate = date => {
    setDate(date)
  }

  return (
    <div>
      <Calendar calendarType="US" onChange={changeDate} value={date} />
      <DateView date={dateNumber} month={dateMonth} />
    </div>
  )
};

export default App;
