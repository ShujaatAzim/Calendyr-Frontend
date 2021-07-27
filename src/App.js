import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import CalendarContainer from './ContainerComponents/CalendarContainer';

const App = () => {

  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div style={{ textAlign: "center", display: "flex", margin: "2rem" }}>
      <div>
        <CalendarContainer selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </div>
      <div style={{ marginLeft: "3rem" }}>
        {selectedDay ? 
        <h3>{selectedDay.month}/{selectedDay.day}/{selectedDay.year}</h3> 
        : null }
      </div>
    </div>
  )
};

export default App;
