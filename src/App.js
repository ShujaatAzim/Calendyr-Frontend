import React, { useState, useEffect } from 'react';
import DateView from './components/DateView';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const App = () => {
  
  const [date, setDate] = useState(new Date())
  const [dateNumber, setDateNumber] = useState(null)
  const [dateMonth, setDateMonth] = useState(null)
  const [dateYear, setDateYear] = useState(null)

  useEffect(() => {
    let number = date.getDate()
    let month = date.toLocaleString('default', { month: 'long' })
    let year = date.getFullYear()
    setDateNumber(number)
    setDateMonth(month)
    setDateYear(year)
  }, [date])

  const changeDate = date => {
    setDate(date)
  }

  return (
    <div>
      <div>
        <Calendar calendarType="US" onChange={changeDate} value={date} />
      </div>
      <br />
      <div>
        <DateView date={dateNumber} month={dateMonth} year={dateYear} />
      </div>
    </div>
  )
};

export default App;
