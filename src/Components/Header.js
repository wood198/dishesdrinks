import React from 'react';
import '../Css/Header.css';

export default class Header extends React.Component {

  render() {
    return(
      <div className="box">
          <p className="title">dishes&drinks</p>
          <button type="button" type="button" title="Cocktails" className="navigation">Cocktails</button>
          <button type="button" type="button" title="Meals" className="navigation">Meals</button>
      </div>
    );
  }
}
