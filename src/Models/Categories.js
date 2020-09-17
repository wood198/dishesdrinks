const CategoryCalls = {};

CategoryCalls.getCocktailCategories = function getCocktailCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  return fetch(url)
    .then(result => result.json())
    .then(result => result.CocktailCategories)
    .catch(err => Error(err, "Loading Categories"));
};

CategoryCalls.getMealCategories = function getMealCategories() {
  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(result => result.json())
    .then(result => result.MealCategories)
    .catch(err => Error(err, "Loading Categories"));
};


export default CategoryCalls;
