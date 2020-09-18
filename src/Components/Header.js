import React from 'react';
import { Link } from "react-router-dom";
import '../Css/Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="box">
          <p className="title">dishes&drinks</p>
          <Link to="/CocktailCategories">
            <button type="button" className="cnavigation" onClick={() => {this.props.setMealSide("C");}}>Cocktails</button>
          </Link>
          <Link to="/MealCategories">
            <button type="button" className="mnavigation" onClick={() => {this.props.setMealSide("M");}}>Meals</button>
          </Link>
      </div>
    );
  }
}
