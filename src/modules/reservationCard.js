import postComment from './postComment';
import schedule from './schedule';

const reservationCard = (title, tag, imageThumb, id, area) => {

  const reservationBoard = document.querySelector('.reservation-board');

  const imgThumb = document.createElement('img');
  imgThumb.id = 'imgThumb';
  imgThumb.src = imageThumb;

  const form = document.createElement('form');

  const divText = document.createElement('div');
  const divTable = document.createElement('div');
  divTable.className = 'divReservations';

  if (!tag) {
    tag = '';
  }

  divText.innerHTML = `<h2>${title}</h2><h4>${area} ${tag}</h4>`;

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.className = 'remove';
  inputName.placeholder = 'Your Name';
  inputName.required = true;

  const inputComment = document.createElement('input');
  inputComment.id = 'comment';
  inputComment.placeholder = 'Your Insights';
  inputComment.required = true;

  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.textContent = 'SUBMIT';

  const inputs = [inputName, inputComment, submitButton];

  for (let i = 0; i < inputs.length; i += 1) {
    form.appendChild(inputs[i]);
  }

  reservationBoard.appendChild(imgThumb);
  reservationBoard.appendChild(divText);
  divText.appendChild(form);
  reservationBoard.appendChild(divTable);

  schedule();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name');
    const comment = document.getElementById('comment');
    postComment(userName.value, comment.value, id);
  });

};

export default reservationCard;