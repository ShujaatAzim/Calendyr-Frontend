import React from 'react'
import Activity from '../Components/Activity'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const DateView = props => {

  const { date, month, year } = props
  const { activities } = props

  return (
    <div>
      <Card style={{ width: '350px' }}>
        <Card.Body>
          <Card.Title>
            {month}{" "}{date}
              {date === 1 || date === 21 || date === 31 ? "st" : date === 2 || date === 22 ? "nd" : date === 3 || date === 23 ? "rd" : "th"}
              ,{" "}{year}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Things to do:</Card.Subtitle>
          <Card.Text>
            <ul style={{ listStyleType: "none" }}>
            {activities.map(activity => {
              return (
                <li><Activity key={activity} activity={activity.name} /></li>
              )
            })}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DateView