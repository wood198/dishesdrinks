import React from 'react';
import MealSideBar from './MealSideBar';
import '../Css/MealCategories.css'


export default class MealCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.loadCategories(this.props.mealSide);
    console.log(this.props.mealSide);
    console.log(this.props.categories);
  }

  render() {
    return(
      <div>
        <MealSideBar/>
        <div className="mcContainer">
          <h3>Find Your Next Meal!</h3>
        </div>
      </div>
    );
  }
}
