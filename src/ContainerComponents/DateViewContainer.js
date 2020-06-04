import React, { useState, useEffect } from 'react'
import DateView from '../Components/DateView'

const DateViewContainer = props => {

  const { date } = props
  const [dateNumber, setDateNumber] = useState(null)
  const [dateMonth, setDateMonth] = useState(null)
  const [dateYear, setDateYear] = useState(null)

  useEffect(() => {
    let number = date.getDate()
    let month = date.toLocaleString('default', { month: 'long' })
    let year = date.getFullYear()
    setDateNumber(number)
    setDateMonth(month)
    setDateYear(year)
  }, [date])

  return (
    <DateView date={dateNumber} month={dateMonth} year={dateYear} activities={props.activities} />
  )
}

export default DateViewContainer