import {Component} from "react";
import "./cards.styles.css";

class Cards extends Component {
  render() {
    const {name, id, email} = this.props.monster;
    return (
      <div className="cards-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/1${id}?set=set2&size=180x180`}
        />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Cards;
