import React, { useState, useEffect } from 'react';
import CalendarContainer from './ContainerComponents/CalendarContainer';
import DateViewContainer from './ContainerComponents/DateViewContainer';

const App = () => {

  const [date, setDate] = useState(new Date())
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/activities')
    .then(resp => resp.json())
    .then(data => setActivities(data))
  }, [])

  return (
    <div>
        <CalendarContainer date={date} setDate={setDate} />
      <br />
        <DateViewContainer date={date} activities={activities}/>
    </div>
  )
};

export default App;
