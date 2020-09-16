import React from 'react';
import Header from './Header';
import CocktailSideBar from './CocktailSideBar';

export default class CocktailCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div id="parent">
        <div id="top">
          <Header/>
        </div>
        <div id="narrow">
          <CocktailSideBar/>
        </div>
        <div id="wide">
        </div>
      </div>
    );
  }
}
