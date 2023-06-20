const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    } else {
      closeCards();
      setTimeout(() => {
        card.classList.add('active');
      }, 600);
    }
  });
});

function closeCards() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
