import React from 'react'
import Activity from './Activity'

class DayView extends React.Component {

  state = {
    allActivities: []
  }

  handleNewActivity = (event) => {
    event.preventDefault()
    console.log("submitted")
  }

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
          <div>
            <br />
            Add New Activity:
            <form onSubmit={this.handleNewActivity}>
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
      </div>
      )
  }
}

export default DayView