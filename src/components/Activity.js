import React from 'react'

const Activity = props => {
  return (
    <li>
      <input type="checkbox" />
      <label>{props.activity}</label>
    </li>
  )
}

export default Activity