import { withRouter } from 'react-router-dom'
import React from 'react';
import './cocktail-card.css';

export default class CategoryCard extends React.Component {
   
    render() {
      return (<div className="category">
        <ImgWithRoute {...this.props} />
        {this.props.isMainPage
        ?  <p onClick={() => this.props.toggle({...this.props})}>{this.props.strDrink}</p>
        :  <p>{this.props.strDrink}</p>
      }
      </div>) 
    }
  }
  
  const ImgWithRoute = withRouter(({ history, strDrinkThumb, strDrink,idDrink  }) => {
    return (
      <img src={strDrinkThumb} onClick={() => { history.push(`${history.location.pathname}/cocktail/${idDrink}`, { strDrink, strDrinkThumb }) }}></img>
    )
  });