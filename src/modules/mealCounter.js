const mealCounter = () => {
    const counterContainer = document.getElementById('meals-counter');
    const mealCount = document.getElementsByClassName('mealItem').length;
    counterContainer.textContent = `(${mealCount})`;
    return mealCount;
 }
 
 export default mealCounter;