import saladImage from './assets/salad.png';
import cheeseImage from './assets/cheese.png';
import meatImage from './assets/meat.png';
import baconImage from './assets/bacon.png';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

export const INGREDIENTS: Ingredient[] = [
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Bacon', price: 60, image: baconImage}
];

