import countryService from "../services/country";
import { useEffect, useState } from "react";
const Country = ({ filteredCountry }) => {
  const [weatherData, setWeatherData] = useState("");
  const iconCode =
    weatherData.weather && weatherData.weather.length > 0
      ? weatherData.weather[0].icon
      : null;
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await countryService.getWeather(filteredCountry.capital);
        setWeatherData(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, [filteredCountry.capital]);

  return (
    <>
      <div className="country-container">
        <h1 className="country-name">{filteredCountry.name.common}</h1>
        <img
          className="country-img"
          src={filteredCountry.flags.png}
          alt={filteredCountry.flags.alt}
        />
        <div className="country-name" style={{ marginBottom: "2rem" }}>
          <h3>Capital:</h3>
          <span>{filteredCountry.capital}</span>
          <h3>Area:</h3>
          <span>{filteredCountry.area}</span>
          <h3>Languages:</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {Object.entries(filteredCountry.languages).map(
              ([languageCode, languageName], index) => (
                <li key={index}>{languageName}</li>
              )
            )}
          </ul>
        </div>
        <div className="country-weather">
          <div>
            <h2>Weather in {filteredCountry.capital}:</h2>
            {/* {console.log(weatherData)} */}
            {weatherData ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>
                  Temperature: {(weatherData.main.temp - 273.15).toFixed(0)} °C
                </span>
                <span>Weather: {weatherData.weather[0].main}</span>
                <span>Wind: {weatherData.wind.speed} m/s</span>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {iconCode && (
              <img
                style={{ height: "100%" }}
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Country;
