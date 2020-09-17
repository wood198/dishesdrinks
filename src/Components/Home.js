import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import CategoryCalls from '../Models/Categories';
import '../Css/Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealSide: false,
      categories: []
    };
  }

  componentDidMount(){

  }

  loadCategories = mealSide => {
    if(mealSide === false) {
      return CategoryCalls.getCocktailCategories()
        .then(categories => {
          if (this.props.categories !== categories) {
            this.setState({ categories });
          }
        })
        .catch(err => Error(err, "Loading Categories"));
    }
    else {
      return CategoryCalls.getMealCategories()
        .then(categories => {
          if (this.props.categories !== categories) {
            this.setState({ categories });
          }
        })
        .catch(err => Error(err, "Loading Categories"));
    }
  }

  render() {
    return(
      <div>
        <Header mealSide={this.state.mealSide}/>
        <div className="homePage">
          <div className="mealBox">
            <img className="himg" src={require(`../Images/PinClipart.com_dinner-plates-clipart_5715674.png`)} alt="Meals Clipart" />
            <h1>Cook a New Meal!</h1>
            <Link
              to={{
                pathname: '/MealCategories',
                state: { loadCategories: this.loadCategories, mealSide: this.state.mealSide, categories: this.state.categories }
            }}>
              <button className="mealGo">Go!</button>
            </Link>
          </div>
          <div className="cocktailBox">
            <img className="himg" src={require(`../Images/PinClipart.com_catering-clipart_361498.png`)} alt="Cocktails Clipart" />
            <h1>Try New Cocktails!</h1>
            <Link
              to={{
                pathname: '/CocktailCategories',
                state: { loadCategories: this.loadCategories, mealSide: this.state.mealSide, categories: this.state.categories }
            }}>
              <button className="cocktailGo">Go!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }


}
