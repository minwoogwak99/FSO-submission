import React from 'react'
import DisplayPersonName from './DisplayPersonName'

const Result = ({filterList, person}) => {
  return (
    <div>
      <h2>Numbers</h2>
      <div>
        {filterList.length > 0 ? filterList.map(person => <DisplayPersonName key={person.name} person={person}/>) 
                               : person.map(person => <DisplayPersonName key={person.name} person={person}/>)}
      </div>
    </div>
  )
}

export default Result