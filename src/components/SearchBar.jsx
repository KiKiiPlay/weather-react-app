import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/search_bar.css";
import { Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="proper_width">
      <InputGroup size="lg">
        <Form.Control
          placeholder="Find your city here!"
          aria-label="Username"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button className="some_margin">Search</Button>
    </div>
  );
};

export default SearchBar;