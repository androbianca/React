import { withRouter } from 'react-router-dom'
import React from 'react';
import './cocktail-card.css';

export default class CategoryCard extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (<div className="category">
        <ImgWithRoute {...this.props} />
        <p onClick={
          () => this.props.toggle({...this.props})}>{this.props.strDrink}</p>
      </div>) 
    }
  }
  

  const ImgWithRoute = withRouter(({ history, strDrinkThumb, strDrink }) => {
    return (
      <img src={strDrinkThumb} onClick={() => { history.push('/about', { strDrink, strDrinkThumb }) }}></img>
    )
  });