import React from 'react';
import type {Character} from '../../types';
import './Burger.css';

interface Props {
  ingredients: Character[];
}

const Burger: React.FC<Props> = ({ingredients}) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {ingredients.map((ingredient, index) => {
        const ingredientElements = [];
        for (let i = 0; i < ingredient.count; i++) {
          ingredientElements.push(
            <div key={index + i} className={ingredient.name}></div>
          );
        }
        return ingredientElements;
      })}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
