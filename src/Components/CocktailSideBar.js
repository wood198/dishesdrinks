import React from 'react';
import { Link } from "react-router-dom";
import '../Css/SideBar.css';

export default class CocktailSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="csContainer">
        <img className="img" src={require(`../Images/PinClipart.com_catering-clipart_361498.png`)} alt="Cocktails Clipart" />
        <br/>
        <Link to="/AllCocktails">
          <button className="button">All</button>
        </Link>
        <Link
          to={{
            pathname: '/Recipe',
            state: { currentRecipe: this.state.currentRecipe }
          }}>
          <button className="button">Random</button>
        </Link>
          <button className="button">Non-Alcoholic</button>
        <p className="text">Search:</p>
          <button className="button">By Name</button>
          <button className="button">By Ingredient</button>
          <button className="button">By Category</button>
      </div>
    );
  }
}
