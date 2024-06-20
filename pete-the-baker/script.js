function cakes(recipe, available) {
  let result = 0;
  const ingredients = {};

  for (const amountRecipe in recipe) {
    ingredients[amountRecipe] = 0;
    for (const amountAvailable in available) {
      if (amountRecipe === amountAvailable) {
        ingredients[amountRecipe] = Math.floor(
          available[amountAvailable] / recipe[amountRecipe]
        );
      }
    }
  }
  result = Math.min(...Object.values(ingredients));
  return result;
}
