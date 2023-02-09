export const mealCounterApi = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();

    return result.length;
  } catch (error) {
    return null;
  }
};