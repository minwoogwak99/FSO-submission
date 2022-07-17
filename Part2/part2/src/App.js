import {useState} from 'react'

function App() {
  const [person, setPerson] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [filterList, setFilterList] = useState([])



  const addPerson = (e) => {
    e.preventDefault()
    
    const nameArr = person.map(person => person.name)
    const numberArr = person.map(person => person.number)

    if ((newName.length === 0) || (newNumber.length === 0)) {
      alert('please fill in the blanks')
      console.log(nameArr)
    } else if ((nameArr.includes(newName) !== true) && (numberArr.includes(newNumber) !== true)) {
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
    setFilterList(person.filter(person => (person.name.toLowerCase().includes(filterValue.toLowerCase()))
                                          || person.number.replace(/-/g, '').includes(filterValue) ))

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
    console.log(e.target.value)
    setFilterValue(e.target.value)
    if (e.target.value.length === 0) {
      setFilterList([])
    }
    
    console.log(filterList)
  }

  
  
  
  return (
    <div>
      <h2>PhoneBook</h2>
      <h3>Search</h3>
      <div>
        <form onSubmit={filterInfo}>
          <div>
            filter: <input type='text' value={filterValue} onChange={handleFilterValue}/>
            <button type='submit'>Search</button>
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
        {filterList.length > 0 ? filterList.map(person => <DisplayPersonName key={person.name} person={person}/>) 
                                : person.map(person => <DisplayPersonName key={person.name} person={person}/>)
        }
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
