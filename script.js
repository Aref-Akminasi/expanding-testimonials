const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      closeCards();
      card.classList.add('active');
    }
  });
});

function closeCards() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
