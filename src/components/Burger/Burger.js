import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

  const transformedIngredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])]
        .map((ele, index) => {
          return <BurgerIngredient key={index+key} type={key} />
        });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients.length === 0 ? 'Please add ingredients' : transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};
export default burger;