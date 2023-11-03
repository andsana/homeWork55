import {useState} from 'react';
import type {Character} from './types';
import './App.css';
import IngredientButtons from './components/IngredientButtons';

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

  return (
    <>
      <div>
        <h3>Ingredients:</h3>
        <div className="ingredients">
          {ingredientButtonsList}
        </div>
      </div>
    </>
  );
}

export default App;