const Persons = ({filteredPersons}) => {
  return (
    <ul style={{ textAlign: "left" }}>
      {filteredPersons.map((person, index) => (
        <li key={index}>
          {person.name}: {person.number}
        </li>
      ))}
      {/* {console.log(persons)} */}
    </ul>
  );
};
 export default Persons;