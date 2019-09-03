import React, { useState } from 'react'
import Date from './Date'

const Calendar = () => {

  let [date, setDate] = useState(1);

  let dates = [];

  const dateGen = () => {
    for (let i = 1; i < 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  function chunk(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  }

  const newDates = chunk(dateGen(), 7);

  return (
    <div style={{ textAlign: "center"}}>
      <h1>September {date}</h1>
      <div>
        {newDates.map(dates => {
          return (
            <Date key={dates} dates={dates} setDate={setDate}/>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar