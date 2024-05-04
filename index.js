import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './RecipeList';

const rootElement = document.getElementById('root');

async function fetchRecipes() {
  const response = await fetch('get_recipes.php');
  const recipes = await response.json();
  return recipes;
}

fetchRecipes().then((recipes) => {
  ReactDOM.render(<RecipeList recipes={recipes} />, rootElement);
});