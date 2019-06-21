import axios from "axios";

const API_KEY = "d87cb3c819d2d12eea07f095bef895b5";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${API_URL}&q=${city},us`;
  const res = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: res
  };
}
