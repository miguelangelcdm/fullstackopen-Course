const Filter = ({filterValue,handlefilterChange}) => {
    return (
      <>
        <div style={{ marginBlock: "1rem" }}>
          Filter shown with:
          <input value={filterValue} onChange={handlefilterChange} />
        </div>
      </>
    );
  };
  export default Filter;