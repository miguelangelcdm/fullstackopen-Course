import { useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personform";
import Persons from "./components/persons";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    return setNewName(event.target.value);
  };
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handlefilterChange = (event) => setFilterValue(event.target.value);
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      // console.log('ya existe')
      window.alert(newName + " is already added to phonebook");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };
  const filteredPersons = persons.filter(
    (person) =>
      filterValue === "" ||
      person.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filterValue={filterValue}
        handlefilterChange={handlefilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
