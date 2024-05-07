document.addEventListener("DOMContentLoaded", function () {
    let firstCardUrl = '';
    let firstCard;
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

        if (firstCardUrl == '') {
            firstCardUrl = face.getAttribute('src')
            firstCard = card;
        } else {
            const currentCardUrl = face.getAttribute('src');

            if (firstCardUrl == currentCardUrl) {
                firstCard.classList.add('win');
                card.classList.add('win');
            } else {
                setTimeout(
                    function () {
                        showCover(firstCard);
                        showCover(card);
                    },
                    2 * 1000);
            }
        }
    }

    function showCover(card) {
        firstCardUrl = '';
        const cover = card.querySelector('.cover');
        cover.style.display = 'block'
        cover.classList.add('active');

        const face = card.querySelector('.face');
        face.style.display = 'none'
        face.classList.remove('active');
    }
});



