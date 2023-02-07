const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xJ4HvJykr7cdlrGqH18j/likes';
import getMeals from '../modules/getMeals.js';
import reservationCard from './reservationCard.js';

const reservationUI = async (idMeal) => {
  const data = await getMeals();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      reservationCard(meal.strMeal, meal.strTags, meal.strMealThumb, meal.idMeal, meal.strArea);
    };
  });
};

export default reservationUI;