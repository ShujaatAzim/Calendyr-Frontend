import React from 'react';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

const CalendarContainer = props => {

  const today = utils().getToday();

  return (
    <div>
      <Calendar 
        value={props.selectedDay} 
        onChange={props.setSelectedDay} 
        shouldHighlightWeekends 
        maximumDate={today}
        calendarSelectedDayClassName="selected-day" 
        customDaysClassName={[
          { year: 2021, month: 7, day: 4, className: "one-task" },
          { year: 2021, month: 7, day: 5, className: "two-task" },
          { year: 2021, month: 7, day: 6, className: "three-task" },
          { year: 2021, month: 7, day: 7, className: "four-task" },
          { year: 2021, month: 7, day: 8, className: "five-task" },
          { year: 2021, month: 7, day: 9, className: "more-task" }
        ]}  
      />
    </div>
  );
}

export default CalendarContainer;