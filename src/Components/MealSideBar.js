import React from 'react';
import { Link } from "react-router-dom";
import '../Css/SideBar.css';

export default class MealSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="mealContainer">
        <img className="img" src={require(`../Images/PinClipart.com_dinner-plates-clipart_5715674.png`)} alt="Meals Clipart" />
        <br/>
        <Link to="/AllMeals">
          <button className="button">All</button>
        </Link>
          <button className="button">Random</button>
        <p className="text">Search:</p>
          <button className="button">By Name</button>
          <button className="button">By Main Ingredient</button>
          <button className="button">By Category</button>
          <button className="button">By Area</button>
      </div>
    );
  }
}
