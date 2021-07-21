import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

const App = () => {

  const [selectedDay, setSelectedDay] = useState(null);
  const today = utils().getToday();

  return (
    <div style={{ textAlign: "center", display: "flex" }}>
      <div>
      <Calendar 
        value={selectedDay} 
        onChange={setSelectedDay} 
        shouldHighlightWeekends 
        maximumDate={today}
        calendarSelectedDayClassName="selected-day" 
        customDaysClassName={[
          { year: 2021, month: 7, day: 6, className: "one-task" },
          { year: 2021, month: 7, day: 7, className: "two-task" },
          { year: 2021, month: 7, day: 8, className: "three-task" },
          { year: 2021, month: 7, day: 9, className: "four-task" },
          { year: 2021, month: 7, day: 10, className: "five-task" },
          { year: 2021, month: 7, day: 11, className: "more-task" }
        ]}  
      />
      </div>
      <div>
        {selectedDay ? 
        <h3>{selectedDay.month}/{selectedDay.day}/{selectedDay.year}</h3> 
        : null }
      </div>
    </div>
  )
};

export default App;
