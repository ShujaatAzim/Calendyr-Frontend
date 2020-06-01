import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarContainer = props => {

  const { date } = props

  const changeDate = date => {
    props.setDate(date)
  }

  return (
    <div>
      <Calendar calendarType="US" onChange={changeDate} value={date} />
    </div>
  )
}

export default CalendarContainer