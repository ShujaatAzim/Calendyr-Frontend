import React from 'react'

class Date extends React.Component {

  state = {
    selected: false
  }

  render() {
    
    const { dateChange, index } = this.props
    
    return (
      <span onClick={() => dateChange(index)}>
        {" "}{index + 1}
      </span>
    )
  }
}

export default Date