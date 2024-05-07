document.addEventListener("DOMContentLoaded", function () {

    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener('click', onCardClick)
    }

    function onCardClick(evt) {
        const card = evt.currentTarget;

        const isFaceActive = card
            .querySelector('.face')
            .classList
            .contains('active');

        if (isFaceActive) {
            showCover(card);
        } else {
            showFace(card)
        }
    }

    function showFace(card) {
        const cover = card.querySelector('.cover');
        cover.style.display = 'none'
        cover.classList.remove('active');

        const face = card.querySelector('.face');
        face.style.display = 'block'
        face.classList.add('active');
    }

    function showCover(card) {
        const cover = card.querySelector('.cover');
        cover.style.display = 'block'
        cover.classList.add('active');

        const face = card.querySelector('.face');
        face.style.display = 'none'
        face.classList.remove('active');
    }
});



