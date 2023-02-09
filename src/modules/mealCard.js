import like from '../images/heart.svg';
import postLike from './postLike.js';
import closeIcon from '../images/x-circle-fill.svg';
import commentUI from './commentUI.js';

const myCancel = new Image();
myCancel.src = closeIcon;
myCancel.classList = ('imgCancel');

const myLike = new Image();
myLike.src = like;
myLike.classList = 'imgLike';

const mealCard = (title, id, image_id, likeNum, artist_title) => {

  const board = document.querySelector('.meals-menu');

  const div = document.createElement('div');
  div.className = 'mealItem';
  const strDiv = document.createElement('div');
  strDiv.className = 'strDiv';
  const likeDiv = document.createElement('div');
  likeDiv.className = 'likeDiv';
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'buttonDiv';

  const buttonReservation = document.createElement('div');
  buttonReservation.className = 'button';

  const buttonComment = document.createElement('div');
  buttonComment.className = 'button';

  div.innerHTML = `<img class='thumb' src='${image_id}'>`;
  strDiv.innerHTML = `<span>${title}</span>`
  likeDiv.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${like}'><div class="stop">${likeNum}</div><p class="stop">Likes</p>`
  buttonReservation.innerHTML = `<div>Reservations</div><span class='hide'>${id}</span>`
  buttonComment.innerHTML = `<div>Comments</div><span class='hide'>${id}</span>`

  strDiv.appendChild(likeDiv);
  div.appendChild(strDiv);
  buttonDiv.appendChild(buttonComment);
  buttonDiv.appendChild(buttonReservation);
  div.appendChild(buttonDiv);
  board.appendChild(div);

  likeDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('stop')) {
      return;
    }
    postLike(e.target.previousElementSibling.textContent);
    const sumlike = e.target.nextElementSibling.textContent;
    e.target.nextElementSibling.textContent = parseInt(sumlike) + 1;
  })

  const overlay = document.querySelector('.open');
  const cancel = document.querySelector('.close');
  cancel.appendChild(myCancel);

  buttonComment.addEventListener('click', (e) => {
    overlay.style.display = 'block';
    commentUI(e.target.nextElementSibling.textContent);
  });

  cancel.addEventListener('click', (e) => {
    overlay.style.display = 'none';
    document.querySelector('.comments-board').innerHTML = '';
  });

  cancel.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelector('.comments-board').innerHTML = '';
  });
};

export default mealCard;