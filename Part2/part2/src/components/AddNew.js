import React from 'react'


const AddNew = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <div>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input type='text' value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Phone number: <input type='text' value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNew