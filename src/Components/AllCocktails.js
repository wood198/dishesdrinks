import React from 'react';
import Header from './Header';
import CocktailSideBar from './CocktailSideBar';
import '../Css/CocktailCategories.css';

export default class AllCocktails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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
