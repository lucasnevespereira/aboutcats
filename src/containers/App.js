import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import catData from "../cats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ cats: catData }, () => {
      console.log(this.state.cats);
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { cats, searchfield } = this.state;
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

        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </div>
    );
  }
}

export default App;
