let url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ooCKDNVhVwx5nuC5j8LT/comments?item_id=';

const getComments = async (idMeal) => {
  url += idMeal;
  const response = await fetch(url);
  const data = await response.json(url);
  return data;
};

export default getComments;