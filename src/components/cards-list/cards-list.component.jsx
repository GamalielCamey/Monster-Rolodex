import {Component} from "react";
import Cards from "../cards/cards.component";
import "./cards-list.styles.css";

class CardList extends Component {
  //? YOU CAN SEE A DOUBLE RENDERING WITH THE CONSOLELOG IN THE METHOD BECASUSE COMPONENTS RE RENDER IN 2 CONDITIONS, WHEN setState GETS CALLED & WHEN THE PROPS ARE UPDATED

  render() {
    const {monsters} = this.props;
    return (
      <div className="cards">
        {monsters?.map((monster) => (
          <Cards monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
