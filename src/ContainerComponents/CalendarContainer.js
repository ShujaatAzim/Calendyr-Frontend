import React, { useState, useEffect } from 'react';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

const CalendarContainer = props => {

  const today = utils().getToday();
  const [dates, setDates] = useState(null)

  const { selectedDay, setSelectedDay } = props;

  useEffect(() => {
    setDates([
      { year: 2021, month: 8, day: 1, className: "one-task" },
      { year: 2021, month: 8, day: 2, className: "two-task" },
      { year: 2021, month: 8, day: 3, className: "three-task" },
      { year: 2021, month: 8, day: 4, className: "four-task" },
      { year: 2021, month: 8, day: 5, className: "five-task" },
      { year: 2021, month: 8, day: 6, className: "more-task" }
    ])
  }, [])

  return (
    <div>
      { dates ? 
      <Calendar 
        value={selectedDay} 
        onChange={setSelectedDay} 
        shouldHighlightWeekends 
        maximumDate={today}
        calendarSelectedDayClassName="selected-day" 
        customDaysClassName={dates}  
      /> : null }
    </div>
  );
}

export default CalendarContainer;