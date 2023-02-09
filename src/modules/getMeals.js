const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
// const URL = 'https://api.artic.edu/api/v1/exhibitions?limit=12 ';

const getMeals = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export default getMeals;
