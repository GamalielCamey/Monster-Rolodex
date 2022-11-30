import {Component} from "react";
import "./searchbar.styles.css";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          className={this.props.className}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Searchbar;
