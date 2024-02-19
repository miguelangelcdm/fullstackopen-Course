import Country from "./country";
const Countries = ({ filteredCountries,handleCountryShow }) => {
  return (
    <>
      {filteredCountries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      {filteredCountries.length > 1 && filteredCountries.length <= 10 && (
        <ul>
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "10%", marginBlock: "1rem" }}
            >
              {country.name.common}
              <button onClick={()=>handleCountryShow(country.name.common)}>Show</button>
            </li>
          ))}
        </ul>
      )}
      {filteredCountries.length === 1 && (
        <Country filteredCountry={filteredCountries[0]} />
      )}
    </>
  );
};

export default Countries;
