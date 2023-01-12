const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsList = document.getElementById("ingredients");
const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsItems = document.createElement('li');
  ingredientsItems.classList.add('item');
  ingredientsItems.textContent = ingredients[i];
  elements.push(ingredientsItems);
}
ingredientsList.append(...elements);

