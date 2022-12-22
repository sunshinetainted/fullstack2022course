import {useEffect, useState} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [personsToShow, setPersonsToShow] = useState(persons)
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setPersonsToShow(response.data)
      })
    
  }, [])
  
  const addName = (event) => {
    event.preventDefault()    
    setNewFilter('')
    if (persons.some(person => person.name === newName)) {
      alert (`${newName} is already added to phonebook`)            
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersonsToShow(persons.concat(personObject))
      setPersons(persons.concat(personObject))
      setNewName('')     
      setNewNumber('') 
      
    }
  }
  
  const handleFilterChange = (event) => {
    if (event.target.value !='') {
      setNewFilter(event.target.value)
      setShowAll(!showAll)      
    } else {
      setNewFilter('')
      setShowAll(!showAll)
      setPersonsToShow(persons)
    }
    
    const searchTerm = event.target.value
    setPersonsToShow(persons.filter(person =>
      person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0  
    )) 
  }
  
  
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={newFilter}
        filterChangeHandler={handleFilterChange} 
      />
      <h3>Add a new entry</h3>
      <PersonForm 
        name={newName} 
        nameChangeHandler={handleNameChange}
        number={newNumber}
        numberChangeHandler={handleNumberChange}
        addPersonHandler={addName}
      />
      <h2>
        Numbers
      </h2>
      <Persons persons={personsToShow} />       
    </div>
  )
}

export default App