import React from 'react'

class Activity extends React.Component {

  state = {
    name: this.props.name
  }

  render() {
    return (
    <div>
      {/* <input type="checkbox" checked={currentDate.learning} onClick={() => this.props.toggleActivity('learning')} onChange={() => ""}/>{this.props.name}{" "} */}
    </div>
    )
  }

}

export default Activity