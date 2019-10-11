import React from 'react'

class DayView extends React.Component {


  render() {
    const { currentDate } = this.props; 
    
    if (!currentDate) {
      return <div></div>
    }

    return (
      <div>
        <div>
          <h4>October {currentDate.date}</h4>
        </div>
        <div>
            <input type="checkbox" checked={currentDate.learning} onClick={() => this.props.toggleActivity('learning')} onChange={() => ""}/>Learning{" "}
            <input type="checkbox" checked={currentDate.project} onClick={() => this.props.toggleActivity('project')} onChange={() => ""} />Current Project{" "}
            <input type="checkbox" checked={currentDate.algorithms} onClick={() => this.props.toggleActivity('algorithms')} onChange={() => ""} />Algorithms{" "}
            <input type="checkbox" checked={currentDate.networking} onClick={() => this.props.toggleActivity('networking')} onChange={() => ""} />Networking{" "}
        </div>
      </div>
      )
  }
}

export default DayView