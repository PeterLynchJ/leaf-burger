import React from 'react';
import Aux from '../../hoc/Auxi'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
const INITIAL_STATE = {
  ingredients: {

  },
  totalPrice: 4
};
class BurgerBuilder extends React.Component {

    state = INITIAL_STATE;

    addIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type] || 0;
      const updatedCount = oldCount + 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      if (!oldCount) {
        return;
      }
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    startOver = () => {
      this.setState(INITIAL_STATE);
    };

    render() {
      const disabledInfo = {...this.state.ingredients};
      for (let key in INGREDIENT_PRICES) {
        disabledInfo[key] = !disabledInfo[key];
      }
      return (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            add={this.addIngredientHandler}
            remove={this.removeIngredientHandler}
            disabled={disabledInfo}
            total={this.state.totalPrice}
            startOver={this.startOver}/>
        </Aux>
      );
    }
}

export default BurgerBuilder;