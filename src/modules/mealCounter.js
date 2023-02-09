const mealCounter = (total) => {
    const counterContainer = document.getElementById('meals-counter');
    counterContainer.textContent = `(${total})`;
 }
 
 export default mealCounter;