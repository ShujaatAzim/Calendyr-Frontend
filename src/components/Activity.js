import React from 'react'

const Activity = props => {
  return (
    <>
      <input type="checkbox" checked={props.activity.complete} />
      <label>{props.activity.name}</label>
    </>
  )
}

export default Activity