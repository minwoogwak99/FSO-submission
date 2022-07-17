import React from 'react'

const DisplayPersonName = ({person}) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

export default DisplayPersonName