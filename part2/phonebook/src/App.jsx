import { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personform";
import Persons from "./components/persons";
import personService from "./services/person";
import Notification from "./components/notification";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [Message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    personService.getAll().then((initialPeople) => {
      setPersons(initialPeople);
    });
  }, []);
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handlefilterChange = (event) => setFilterValue(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    let existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingPerson) {
      var response = confirm(
        `${existingPerson.name} is aready added to phonebook, replace the old number with a new one?`
      );
      if (response) {
        setMessage(`${existingPerson.name} number updated`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        const changedPerson = { ...existingPerson, number: newNumber };
        personService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? returnedPerson : person
              )
            );
          })
          .catch((error) => {
            // console.log('failed',error)
            setErrorMessage(
              `Info of ${existingPerson.name} has already been removed form server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(persons.filter((p) => p.id !== existingPerson.id));
          });
      }
    } else {
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      const personObject = {
        name: newName,
        number: newNumber,
      };
      // console.log("ready to add!");
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
    // console.log(persons.map((person)=>person.number===newNumber))
    // const personObject = {
    //   name: newName,
    //   number: newNumber,
    // };
  };
  const filteredPersons = persons.filter(
    (person) =>
      filterValue === "" ||
      person.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  const handleRemovalOf = (id) => {
    // console.log(id);
    // const person = persons.find((p) => p.id === id);
    personService.remove(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
    // console.log(persons);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      {Message && (
        <Notification message={Message} errorMessage={errorMessage}/>
      )}
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
      <Persons
        filteredPersons={filteredPersons}
        handleDelete={(id) => handleRemovalOf(id)}
      />
    </div>
  );
};

export default App;
