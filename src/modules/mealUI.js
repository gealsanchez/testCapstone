const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/likes/';
import getMeals from './getMeals.js';
import mealCard from './mealCard.js';
import mealCounter from './mealCounter.js';

const mealUI = async () => {
  const response = await fetch(URL);
  const likes = await response.json();

  const data = await getMeals();
  mealCounter(data.meals.length);
  data.meals.forEach((meal) => {
    let likeNum = 0;
    likes.forEach((item) => {
      if (item.item_id === meal.idMeal) {
        likeNum = item.likes;
      };
    });
    mealCard(meal.strMeal, meal.idMeal, meal.strMealThumb, likeNum, meal.strTags);
  });
  console.log(document.getElementsByClassName('mealItem'));
};

export default mealUI;