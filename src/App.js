import React, { useState, useEffect } from 'react';
import CalendarContainer from './ContainerComponents/CalendarContainer';
import DateViewContainer from './ContainerComponents/DateViewContainer';

const App = () => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    fetch('http://localhost:3000/activities')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
        <CalendarContainer date={date} setDate={setDate} />
      <br />
        <DateViewContainer date={date} />
    </div>
  )
};

export default App;
