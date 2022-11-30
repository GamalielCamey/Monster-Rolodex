import {Component} from "react";
import Searchbar from "./components/searchbar/searchbar.component";
import "./App.css";
import CardList from "./components/cards-list/cards-list.component";

class App extends Component {
  //? CONSTRUCTOR IS A REACT COMPONENT METHOD THAT INITIALICES THE STATE IS THE FIRST METHOD CALLED
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: "",
    };
    // console.log("constructor method");
  }

  //? COMPONENT DID MOUNT METHOD REFERS TO THE FIRST TIME THE PAGE GETS RENDERED (INSTANCIATED), IT ONLY HAPPENS ONCE IN THE LIFE CYCLE OF AN SPA, IT GETS CALLED AFTER THE RENDER (AFTER IT "MOUNTS")
  componentDidMount() {
    // console.log("lifecycle method(componentDidMount)");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {monsters: users};
          }
          // () => console.log(this.state)
        )
      );
  }

  handleChange = (e) => {
    const searchInput = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchInput};
    });
  };

  //? RENDER IS A REACT COMPONENT METHOD THAT DETERMINES WHAT THE UI WILL LOOK LIKE, THIS HAPPENS AFTER THE CONSTRUCTOR & THEN AGAIN AFTER THE LIFECYCLE METHOD RUNS AND CHANGES THE STATE
  render() {
    // console.log("render method");

    const {monsters, searchInput} = this.state;
    const {handleChange} = this;

    const filtered = monsters?.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput);
    });

    return (
      <div>
        <h1 className="title">Monster Rolodex</h1>
        <Searchbar
          handleChange={handleChange}
          placeholder={"Search monster"}
          className={"search-box"}
        />
        <CardList className="cards-container" monsters={filtered} />
      </div>
    );
  }
}

export default App;
