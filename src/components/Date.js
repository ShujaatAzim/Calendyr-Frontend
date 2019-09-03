import React from 'react'

class Date extends React.Component {

  state = {
    currentDay: null,
    clicked: false,
    backgroundColor: "white"
  }

  dayClick = (day) => {
    this.props.setDate(day)
    this.setState({
      currentDay: day,
      clicked: true,
      backgroundColor: "yellow"
    })
  }

  sayHi = () => {
    console.log("hi")
  }
  
  render() {
    return (
      <div key={this.props.dates}>
        {this.props.dates.map(day => (
          <div key={day} style={{ backgroundColor: this.state.backgroundColor, display: "inline-block"}}
            onClick={() => {
              this.dayClick(day);
              this.sayHi()
              }}>
                {" "}{day}
          </div>
        ))}
      </div>
    )
  }
}

export default Date