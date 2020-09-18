import React from 'react';
import CocktailSideBar from './CocktailSideBar';
import '../Css/CocktailCategories.css'

export default class CocktailCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount(){
    // const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    // fetch(url)
    //   .then(result => result.json())
    //   .then(result => {
    //     if (this.props.categories !== result) {
    //       this.setState({ categories: result });
    //     }
    //   })
    //   .catch(err => Error(err, "Loading Categories"));
    // // const fetch = await this.props.loadCategories(this.props.mealSide);
    console.log(this.state.categories);
  }

  render() {

    // console.log(this.props.cCategories)
    // const categoryList = this.props.cCategories.map(categories => (
    //   <div role="button" tabIndex={0} className="category-btn" onKeyPress={this.handleKeyPress}>
    //     <img src={`../Images/PinClipart.com_catering-clipart_361498.png`} alt="Category art" />
    //     <h3>{categories.strCategory.toUpperCase()}</h3>
    //   </div>
    // ));

    return(
      <div>
        <CocktailSideBar/>
        <div className="ccContainer">
          <h3>Let's Get You a Drink!</h3>
        </div>
      </div>
    );
  }
}
