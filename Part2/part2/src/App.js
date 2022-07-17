import {useState} from 'react'
import Search from './components/Search'
import AddNew from './components/AddNew'
import Result from './components/Result'

const App = () => {
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
      
      <Search filterInfo={filterInfo} filterValue={filterValue} handleFilterValue={handleFilterValue} />

      <AddNew addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
              newNumber={newNumber} handleNumberChange={handleNumberChange}  />
      
      <Result filterList={filterList} person={person}/>
    </div>
  );
}
export default App;
