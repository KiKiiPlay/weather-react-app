import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const WeatherElement = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setWeather] = useState({});

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=a8ae1a570a8b212bd9edeefb6887f890"
      );
      if (response.ok) {
        let data = await response.json();
        setCity({ city: data.name });
        setWeather(data.weather);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(city);
  console.log(cityWeather);

  return (
    <div className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>
            <div>{city}</div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default WeatherElement;
