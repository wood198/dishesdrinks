import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CategoryCalls from '../Models/Categories';

import Header from '../Components/Header';
import Home from '../Components/Home';
import CocktailCategories from '../Components/CocktailCategories';
import CocktailSideBar from '../Components/CocktailSideBar';
import MealCategories from '../Components/MealCategories';
import AllCocktails from '../Components/AllCocktails';
import AllMeals from '../Components/AllMeals';
import Recipe from '../Components/Recipe';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealSide: 2,
      cCategories: [],
      mCategories: []
    };
  }

  componentDidMount(){
    this.loadCategories(0);
    this.loadCategories(1);
  }

  setMealSide = (cmd) => {
    if(cmd === "C"){
      this.setState({ mealSide: 0 });
    } else {
      this.setState({ mealSide: 1 });
    }
  }

  loadCategories = side => {
    if(side === 0) {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      fetch(url)
        .then(result => result.json())
        .then(result => {
          if (this.props.cCategories !== result) {
            this.setState({ cCategories: result });
          }
        })
        .catch(err => Error(err, "Loading Categories"));
    }
    else {
      const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      fetch(url)
        .then(result => result.json())
        .then(result => {
          if (this.props.mCategories !== result) {
            this.setState({ mCategories: result });
          }
        })
        .catch(err => Error(err, "Loading Categories"));
    }
  }

  render() {
    return(
      <div>
        <Route
          render={(props) => <Header setMealSide={this.setMealSide}/>}
        />
        <Switch>
          <Route
            exact path='/'
            render={(props) => <Home {...props} setMealSide={this.setMealSide} loadCategories={this.loadCategories}/>}
          />
          <Route
            exact path='/CocktailCategories'
            children={(props) =>
              <CocktailCategories {...props}
                mealSide={this.state.mealSide}
                loadCategories={this.loadCategories}
                cCategories={this.state.categories}
                setMealSide={this.setMealSide}
              />
            }
          />
          <Route
            exact path='/MealCategories'
            children={(props) =>
              <MealCategories {...props}
                mealSide={this.state.mealSide}
                loadCategories={this.loadCategories}
                mCategories={this.state.categories}
                setMealSide={this.setMealSide}
              />
            }
            />
            <Route exact path='/AllCocktails' component={AllCocktails}></Route>
            <Route exact path='/AllMeals' component={AllMeals}></Route>
            <Route exact path='/Recipe' component={Recipe}></Route>
          </Switch>
        </div>
    );
  }
}
