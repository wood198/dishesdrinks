import React from 'react';
import Header from './Header';
import '../Css/Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <Header/>
        <div className="homePage">
          <div className="mealBox">
            <img className="imgM" src={require(`../Images/PinClipart.com_dinner-plates-clipart_5715674.png`)} alt="Meals Clipart" />
            <h1>Cook a New Meal!</h1>
            <button className="mealGo">Go!</button>
          </div>
          <div className="cocktailBox">
            <img className="imgC" src={require(`../Images/PinClipart.com_catering-clipart_361498.png`)} alt="Cocktails Clipart" />
            <h1>Try New Cocktails!</h1>
            <button className="cocktailGo">Go!</button>
          </div>
        </div>
      </div>
    );
  }

}
