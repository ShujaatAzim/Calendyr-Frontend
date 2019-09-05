import React from 'react'

class Date extends React.Component {

  render() {
    
    const { dateChange, dateObj } = this.props

    return (
      <span onClick={() => dateChange(dateObj.date)}>
        {" "}{dateObj.date}
      </span>
    )
  }
}

export default Date