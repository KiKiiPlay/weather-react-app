import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const WeatherElement = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setWeather] = useState({});
  const [temp, setTemp] = useState("");

  const cityFinal = useSelector((state) => state.searchQuerry.searchedCity);

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityFinal}&appid=a8ae1a570a8b212bd9edeefb6887f890`
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
  }, [cityFinal]);

  console.log(city);
  console.log(cityWeather);

  return (
    <div className="mt-5">
      {/* <Card>
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>{temp} ℉</Card.Text>
        </Card.Body>
      </Card> */}
      <div
        className="container justify-content-center"
        style={{ marginTop: "200px" }}
      >
        <div className="row">
          <div className="col" style={{ fontSize: "50px", marginTop: "30px" }}>
            {city}
          </div>
          <div className="col" style={{ fontSize: "90px" }}>
            {temp} ℉
          </div>
        </div>
      </div>
    </div>
  );
};

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default WeatherElement;
