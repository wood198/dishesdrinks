import React from 'react';
import Header from './Header';
import MealSideBar from './MealSideBar';
import '../Css/MealCategories.css'

export default class AllMeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <Header/>
        <MealSideBar/>
        <div className="mcContainer">
          <h3>Find Your Next Meal!</h3>
        </div>
      </div>
    );
  }
}
