import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherElement from "./components/WeatherElement";

function App() {
  return (
    <div className="App">
      <h1>KiKi Weather Searching Web-Page</h1>
      <SearchBar />
      <WeatherElement />
    </div>
  );
}

export default App;
