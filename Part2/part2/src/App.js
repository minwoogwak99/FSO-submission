import {useState} from 'react'

function App() {
  const [person, setPerson] = useState([
    {name: 'Minwoo Gwak', number: '01099426349'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    
    const nameArr = person.map(person => person.name)
    const numberArr = person.map(person => person.number)

    if ((newName.length === 0) || (newNumber.length === 0)) {
      alert('please fill in the blanks')
      console.log(nameArr)
    } else if ((nameArr.includes(newName) !== true) || (numberArr.includes(newNumber) !== true)) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      setPerson(person.concat(newPerson))
      console.log(nameArr)
    } else {
      alert(`the information is already existing in the Phonebook!`)
      console.log(nameArr, numberArr)
    }
  }

  const filterInfo = (e) => {
    e.preventDefault()
    console.log(e.target)
  }


  
  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleFilterValue = (e) => {
    setFilterValue(e.target.value)
  }

  
  
  
  return (
    <div>
      <h2>PhoneBook</h2>
      <div>
        <form onSubmit={filterInfo}>
          <div>
            filter: <input type='text' value={filterValue} onChange={handleFilterValue}/>
          </div>
        </form>
      </div>



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



      <h2>Numbers</h2>
      <div>
        {person.map(person => <DisplayPersonName key={person.name} person={person}/>)}
      </div>
     
    </div>

  );
}


const DisplayPersonName = ({person}) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

export default App;
