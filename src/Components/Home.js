import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import '../Css/Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <Header/>
        <div className="homePage">
          <div className="mealBox">
            <img className="img" src={require(`../Images/PinClipart.com_dinner-plates-clipart_5715674.png`)} alt="Meals Clipart" />
            <h1>Cook a New Meal!</h1>
            <Link to="/MealCategories">
              <button className="mealGo">Go!</button>
            </Link>
          </div>
          <div className="cocktailBox">
            <img className="img" src={require(`../Images/PinClipart.com_catering-clipart_361498.png`)} alt="Cocktails Clipart" />
            <h1>Try New Cocktails!</h1>
            <Link to="/CocktailCategories">
              <button className="cocktailGo">Go!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }


}
