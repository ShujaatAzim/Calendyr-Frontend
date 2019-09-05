import React from 'react'

class DayView extends React.Component {


  render() {
    const { currentDate } = this.props; 
    
    if (!currentDate) return <div />

    return (
      <div>
        <h4>September {currentDate.date}</h4>
        <div>
          <input type="checkbox" checked={currentDate.learning} onClick={() => this.props.toggleActivity('learning')} />Learning
          <input type="checkbox" checked={currentDate.project} onClick={() => this.props.toggleActivity('project')} />Current Project
          <input type="checkbox" checked={currentDate.algorithms} onClick={() => this.props.toggleActivity('algorithms')} />Algorithms
          <input type="checkbox" checked={currentDate.networking} onClick={() => this.props.toggleActivity('networking')} />Networking
        </div>
      </div>
      )
  }
}

export default DayView