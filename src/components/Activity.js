import React from 'react'

const Activity = props => {
  return (
    <>
      <input type="checkbox" />
      <label>{props.activity}</label>
    </>
  )
}

export default Activity