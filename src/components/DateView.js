import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const DateView = props => {

  const { date, month, year } = props

  useEffect(() => {

  }, [])

  return (
    <div>
      <Card style={{ width: '350px' }}>
        <Card.Body>
          <Card.Title>
            {month}{" "}{date}{date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : date === 31 ? "st" : "th"},{" "}{year}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Things to do:</Card.Subtitle>
          <Card.Text>
            This area will hold the activities.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DateView