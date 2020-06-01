import React, { useState } from 'react';
import CalendarContainer from './ContainerComponents/CalendarContainer';
import DateViewContainer from './ContainerComponents/DateViewContainer';

const App = () => {

  const [date, setDate] = useState(new Date())

  return (
    <div>
        <CalendarContainer date={date} setDate={setDate} />
      <br />
        <DateViewContainer date={date} />
    </div>
  )
};

export default App;
