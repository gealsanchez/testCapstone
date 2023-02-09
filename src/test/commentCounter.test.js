import commentCounter from '../modules/commentCounter';
import { mealCounterApi } from '../modules/mealCounterApi';

describe('Test methods', () => {
  test('Counting comments', () => {
    document.body.innerHTML = '<div class="comment"></div><div class="comment"></div><div class="comment"></div>';
    const comments = commentCounter();
    expect(comments).toBe(3);
  });
});