const Persons = ({ filteredPersons, handleDelete }) => {
  return (
    <ul style={{ textAlign: "left" }}>
      {filteredPersons.map((person, index) => (
        <li
          key={index}
          style={{ display: "flex", gap: "10%", marginBlock: "1rem" }}
        >
          {person.name}: {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </li>
      ))}
      {/* {console.log(persons)} */}
    </ul>
  );
};
export default Persons;
