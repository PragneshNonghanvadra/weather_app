import React from "react";
import SearchBar from "./containers/SearchBar";
import WeatherList from "./containers/WeatherList";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
