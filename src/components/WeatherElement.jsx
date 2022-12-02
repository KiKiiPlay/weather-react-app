import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const WeatherElement = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setWeather] = useState({});
  const [temp, setTemp] = useState("");

  const cityName = "Moscow";

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a8ae1a570a8b212bd9edeefb6887f890`
      );
      if (response.ok) {
        let data = await response.json();
        setCity(data.name);
        setWeather(data.weather);
        setTemp(data.main.temp);
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
          <Card.Title>{city}</Card.Title>
          {/* <Card.Text>{cityWeather[0].description}</Card.Text> */}
          <Card.Text>{temp} ℉</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default WeatherElement;
