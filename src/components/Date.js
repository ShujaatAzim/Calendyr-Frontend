import React from 'react'

class Date extends React.Component {
  
  render() {
    return (
      <div key={this.props.dates}>
        {this.props.dates.map(day => (
          <span key={day}>
            {" "}{day}
          </span>
        ))}
      </div>
    )
  }
}

export default Date