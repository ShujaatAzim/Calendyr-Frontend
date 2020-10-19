import React from 'react'

const Activity = props => {

  const handleClick = e => {
    console.log(e.target.value)
  }
  return (
    <>
      <input type="checkbox" checked={props.activity.complete} onChange={(e) => handleClick(e)}/>
      <label>{props.activity.name}</label>
    </>
  )
}

export default Activity