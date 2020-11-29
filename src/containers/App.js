import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import catData from "../cats";

const App = () => {
  // Similar to this.state in React Classes
  const [cats, setCats] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  // Similar to componentDidMount and componentDidUpdate in React Classes
  useEffect(() => {
    setCats(catData);
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredCats = cats.filter((cat) => {
    return cat.breed.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !cats.length ? (
    <h1>Loading..</h1>
  ) : (
    <div className="tc">
      <div className="title">
        <img
          className="logo"
          src={require("../assets/pawprint.svg")}
          alt="logo"
        />
        <h1 className="f1">AboutCats</h1>
      </div>

      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList cats={filteredCats} />
      </Scroll>
    </div>
  );
};

export default App;
