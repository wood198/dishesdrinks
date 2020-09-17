import React from 'react';
import Header from './Header';
import CocktailSideBar from './CocktailSideBar';
import '../Css/CocktailCategories.css'

export default class CocktailCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    //this.props.loadCategories(this.props.mealSide);
    console.log(this.props.mealSide);
    console.log(this.props.categories);
  }

  // loadCategories() {
  //   return CategoryCalls.getCocktailCategories()
  //     .then(categories => {
  //       if (this.props.categories !== categories) {
  //         this.setState({ categories });
  //       }
  //     })
  //     .catch(err => Error(err, "Loading Categories"));
  // }


  render() {


    return(
      <div>
        <Header/>
        <CocktailSideBar/>
        <div className="ccContainer">
          <h3>Let's Get You a Drink!</h3>
        </div>
      </div>
    );
  }
}
