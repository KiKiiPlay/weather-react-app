import { useState, useEffect } from "react";

const WeatherElement = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setWeather] = useState("");

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=a8ae1a570a8b212bd9edeefb6887f890"
      );
      if (response.ok) {
        let data = await response.json();
        setCity({ city: data.name });
        setWeather({ cityWeather: data.weather });
      } else {
        this.setState({
          isLoading: false,
          ifError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        ifError: true,
      });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(city);
  console.log(setWeather);

  return (
    <div className="mt-5">
      <h1>212121</h1>
    </div>
  );
};

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default WeatherElement;
