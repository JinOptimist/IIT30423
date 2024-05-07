document.addEventListener("DOMContentLoaded", function () {
    
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.addEventListener('click', onCardClick)
    }

    function onCardClick(evt){
        const card = evt.currentTarget;
        
        const cover = card.querySelector('.cover');
        cover.style.display = 'none'

        const face = card.querySelector('.face');
        face.style.display = 'block'
    }
});



  