import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/search_bar.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState("");

  return (
    <div className="proper_width">
      <InputGroup size="lg">
        <Form.Control
          placeholder="Find your city here!"
          aria-label="Username"
          aria-describedby="inputGroup-sizing-sm"
          // value={"test"}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </InputGroup>
      <Button
        className="some_margin"
        onClick={() => {
          dispatch({
            type: "SEARCH_CITY",
            payload: searchCity,
          });
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
