console.log('Page loaded!')

let card = document.querySelector('.card__inner');
card.addEventListener('click', (e) => {
    card.classList.toggle('is-flipped')
});