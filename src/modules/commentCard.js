const commentCard = (name, date, comment) => {
  const comments = document.querySelector('.divComments');
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<h5>${name}</h5><h6>${comment}</h6><h6>${date}</h6>`;
  comments.appendChild(div);
};

export default commentCard;