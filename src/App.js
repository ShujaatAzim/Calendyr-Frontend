import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

const App = () => {

  const [selectedDay, setSelectedDay] = useState(null);
  const today = utils().getToday();

  return (
    <div style={{ textAlign: "center" }}>
      <Calendar value={selectedDay} onChange={setSelectedDay} shouldHighlightWeekends maximumDate={today} />
    </div>
  )
};

export default App;
