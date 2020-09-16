import React from 'react';
import { Link } from "react-router-dom";
import '../Css/Header.css';

export default class Header extends React.Component {

  render() {
    return(
      <div className="box">
          <p className="title">dishes&drinks</p>
          <Link to="/CocktailCategories">
            <button type="button" type="button" title="Cocktails" className="cnavigation">Cocktails</button>
          </Link>
          <Link to="/MealCategories">
            <button type="button" type="button" title="Meals" className="mnavigation">Meals</button>
          </Link>
      </div>
    );
  }
}
