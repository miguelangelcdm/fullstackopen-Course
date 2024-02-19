import axios from "axios";
const baseUrl = "http://api.openweathermap.org/";
const api_key = import.meta.env.VITE_OW_API_KEY;

const getAll = () => {
  const request = axios.get(
    "https://studies.cs.helsinki.fi/restcountries/api/all"
  );
  return request.then((response) => response.data);
};
const getWeather = async (location) => {
  try {
    const weatherRequest = await axios.get(
      `${baseUrl}data/2.5/weather?q=${location}&APPID=${api_key}`
    );
    // console.log("Weather data:", weatherRequest.data);
    return weatherRequest.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
export default { getAll, getWeather };
