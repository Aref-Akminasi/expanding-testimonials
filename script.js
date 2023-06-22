const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      closeCards(); //The function 'closeCards' will close all cards (it will take it 0.3s to close because of the transition) that is why a setTimeout is used for the delay
      setTimeout(() => {
        card.classList.add('active');
      }, 500);
    }
  });
});

function closeCards() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
