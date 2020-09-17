import React from 'react';
import Header from './Header';
import CocktailSideBar from './CocktailSideBar';
import MealSideBar from './MealSideBar';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render() {
    return(
      <div>
        <Header mealSide={this.state.mealSide}/>
        <CocktailSideBar
          currentRecipe={this.state.currentRecipe}
          mealSide={this.state.mealSide}
        />
        <div className="ccContainer">
          <h3>Let's Get You a Drink!</h3>
        </div>
      </div>
    );
  }
}
