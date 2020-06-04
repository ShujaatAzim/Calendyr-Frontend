import React from 'react'

const Activity = props => {
  return (
    <>
      <input type="checkbox" value={props.activity.complete} />
      <label>{props.activity}</label>
    </>
  )
}

export default Activity