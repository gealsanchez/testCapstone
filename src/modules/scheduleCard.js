const scheduleCard = (name, date, comment) => {

  const reservations = document.querySelector('.divReservations');
  const div = document.createElement('div');
  div.className = 'reservation';

  // if (!tag) {
  //   tag = '';
  // }

  div.innerHTML = `<h2>${date}</h2><h4>${name} ${comment}</h4>`;
  reservations.appendChild(div);

};

export default scheduleCard;