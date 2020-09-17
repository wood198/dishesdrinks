import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import CocktailCategories from '../Components/CocktailCategories';
import MealCategories from '../Components/MealCategories';
import AllCocktails from '../Components/AllCocktails';
import AllMeals from '../Components/AllMeals';
import Recipe from '../Components/Recipe';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/CocktailCategories' component={CocktailCategories}></Route>
      <Route exact path='/MealCategories' component={MealCategories}></Route>
      <Route exact path='/AllCocktails' component={AllCocktails}></Route>
      <Route exact path='/AllMeals' component={AllMeals}></Route>
      <Route exact path='/Recipe' component={Recipe}></Route>
    </Switch>
  );
}

export default Main;
