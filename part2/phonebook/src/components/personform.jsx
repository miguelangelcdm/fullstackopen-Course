const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div style={{ marginBlock: "1rem" }}>
        name:
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div style={{ marginBlock: "1rem" }}>
        number:
        <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
