import commentCounter from '../modules/commentCounter';
import mealCounter from '../modules/mealCounter';

describe('Test methods', () => {
  test('Counting comments', () => {
    document.body.innerHTML = '<div class="comment"></div><div class="comment"></div><div class="comment"></div>';
    const comments = commentCounter();
    expect(comments).toBe(3);
  });
  test('Counting meals', () => {
    document.body.innerHTML = '<div class="mealItem"></div><div class="mealItem"></div><div id="meals-counter"></div>';

    const meals = mealCounter();
    expect(meals).toBe(2);
  });
});