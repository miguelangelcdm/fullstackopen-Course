import { useState, useEffect } from "react";
import Filter from "./components/filter";
import Countries from "./components/countries";
import countryService from "./services/country";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountry(initialCountries);
    });
  }, []);
  const handlefilterChange = (event) => setFilterValue(event.target.value);
  const filteredCountries = country.filter(
    (country) =>
      filterValue === "" ||
      country.name.common.toLowerCase().includes(filterValue.toLowerCase())
  );
  const handleCountryShow = (name) => setFilterValue(name);
  return (
    <>
      <h1>Country Directory</h1>
      <Filter
        filterValue={filterValue}
        handlefilterChange={handlefilterChange}
      />
      <Countries
        filteredCountries={filteredCountries}
        handleCountryShow={(name) => handleCountryShow(name)}
      />
    </>
  );
};
export default App;
