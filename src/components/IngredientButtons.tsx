import React from 'react';
import { INGREDIENTS } from '../ingredients';
import { Character } from '../types';

interface Props {
  ingredients: Character[];
  addIngredient: (index: number) => void;
  removeIngredient: (index: number) => void;
}

const IngredientButtons: React.FC<Props> = (props) => {
  const addButtonStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    padding: 0,
    border: '1px solid black',
    borderRadius: '5px',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
  };

  return (
    INGREDIENTS.map((INGREDIENT, index) => (
      <div className="add-ingredient" key={index}>
        <button style={addButtonStyle} onClick={() => props.addIngredient(index)}>
          <img src={INGREDIENT.image} alt={INGREDIENT.name} style={imageStyle}/>
        </button>
        <span>{INGREDIENT.name}</span>
        <span>X{props.ingredients[index].count}</span>
        <button onClick={() => props.removeIngredient(index)}>Delete</button>
      </div>
    ))
  );
};

export default IngredientButtons;
