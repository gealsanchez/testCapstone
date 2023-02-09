const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xJ4HvJykr7cdlrGqH18j/likes';
import getMeals from './getMeals.js';
import commentsCard from './commentsCard.js';

const commentUI = async (idMeal) => {
  const data = await getMeals();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      commentsCard(meal.strMeal, meal.strTags, meal.strMealThumb, meal.idMeal, meal.strArea);
    };
  });
};

export default commentUI;