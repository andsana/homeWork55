import {useState} from 'react';
import IngredientButtons from './components/IngredientButtons/IngredientButtons';
import Burger from './components/Burger/Burger';
import {INGREDIENTS} from './Constant/ingredients';
import type {Character} from './types';
import './App.css';


function App() {
  const [ingredients, setIngredients] = useState<Character[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (index: number) => {
    setIngredients((prevState) => prevState.map((ingredient, i) => {
      if (i === index) {
        return {...ingredient, count: ingredient.count + 1};
      }
      return ingredient;
    }));
  };

  const removeIngredient = (index: number) => {
    setIngredients((prevState) => prevState.map((ingredient, i) => {
      if (i === index) {
        return {...ingredient, count: ingredient.count ? ingredient.count - 1 : 0};
      }
      return ingredient;
    }));
  };

  const ingredientButtonsList = <IngredientButtons
    ingredients={ingredients}
    addIngredient={addIngredient}
    removeIngredient={removeIngredient}
  />;

  const calculateBurgerPrice = () => {
    const baseBurgerPrice = 30;
    const ingredientsPrice = INGREDIENTS.reduce((acc, INGREDIENT) => {
      const selectedIngredient = ingredients.find((ingredient) => ingredient.name === INGREDIENT.name);
      const countIngredient = selectedIngredient ? selectedIngredient.count : 0;
      return acc + countIngredient * INGREDIENT.price;
    }, 0);
    return baseBurgerPrice + ingredientsPrice;
  };

  return (
    <div className="app">
      <div className="col-left">
        <h3>Ingredients:</h3>
        <div className="ingredients-wrapper">
          {ingredientButtonsList}
        </div>
      </div>
      <div className="col-right">
        <h3>Burger:</h3>
        <div className="burger-wrapper">
          <Burger ingredients={ingredients}/>
          <p>Price: {calculateBurgerPrice()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

