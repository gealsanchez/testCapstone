import { mealCounterApi } from "./mealCounterApi.js";

const mealCounter = async () => {
   const response = await mealCounterApi();

   const counterContainer = document.getElementById('meals-counter');
   counterContainer.textContent = `(${response})`;
}

export default mealCounter;