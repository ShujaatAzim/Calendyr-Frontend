import React from 'react'
import Date from './Date'
import DayView from './DayView'



class Calendar extends React.Component {
  state = {
    allDates: [],
    currentDate: 0
  }
  
  componentDidMount() {
    let dates = []
    for(let i = 1; i < 31; i++) {
      dates.push({date: i, learning: false, project: false, algorithms: false, networking: false})
    }
    this.setState({
      allDates: dates,
      currentDate: 0
    })
  }

  toggleActivity = (activity) => {
    const newDates = [...this.state.allDates]
    newDates[this.state.currentDate][activity] = !this.state.allDates[this.state.currentDate][activity]
    this.setState({
      allDates: newDates
    })
  }

  dateChange = (index) => {
    this.setState({
      currentDate: index
    })
  }

  render() {
    const currentDate = this.state.allDates[this.state.currentDate]

    const days = this.state.allDates.map((date, index) => {
      return <Date key={index} currentDate={currentDate} index={index} date={date} dateChange={this.dateChange} />
    })

    return (
      <div style={{ textAlign: "center" }}>
        <h1>September</h1>
            {days}
          <br />
          <div>
            <DayView currentDate={currentDate} toggleActivity={this.toggleActivity} />
          </div>
      </div>
      )
  }
}

export default Calendar