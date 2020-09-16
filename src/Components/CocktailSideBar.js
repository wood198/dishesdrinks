import React from 'react';
import '../Css/CocktailSideBar.css';

export default class CocktailSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="container">
        <img className="img" src={require(`../Images/PinClipart.com_catering-clipart_361498.png`)} alt="Cocktails Clipart" />
        <br/>
        <button className="button">All</button>
        <button className="button">Random</button>
        <button className="button">Non-Alcoholic</button>
        <p className="text">Search:</p>
        <button className="button">By Name</button>
        <button className="button">By Ingredient</button>
        <button className="button">By Category</button>
        <button className="button">By Glass</button>
      </div>
    );
  }
}
