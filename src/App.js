import { useState } from "react";
import axios from "axios";
import SearchForm from "./searchForm";
import WeatherDisplay from "./weatherDisplay";
import RecentSearches from "./recentSearches";

const App = () => {
  const [weather, setWeather] = useState(null);
  

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`http://localhost:3001/weather/${city}`);
      setWeather(response.data);
    } catch (error) {
      alert("City not found");
      setWeather(null);
    }
  };
  

  return (
    
    <div>
      <div className="text-light bg-dark"><br/>
      <h1>Weather Dashboard</h1></div>
      <SearchForm onSearch={fetchWeather} />
      <br/>
      <WeatherDisplay weather={weather} />
      <br/>
      <RecentSearches/>
    </div>
  );
};

export default App;
