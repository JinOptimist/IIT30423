document.addEventListener("DOMContentLoaded", function () {

    const next = document.getElementsByClassName('next')[0];

    const block1 = document.getElementsByClassName('block1')[0];
    const block2 = document.getElementsByClassName('block2')[0];
    const block3 = document.getElementsByClassName('block3')[0];
    const block4 = document.getElementsByClassName('block4')[0];
    const block5 = document.getElementsByClassName('block5')[0];



    next.addEventListener('click', moveNext);

    function moveNext() {
        block2.style.width = '0px';
        block5.style.width = '100px';

        setTimeout(function () {
            block2.style.transition = 'none';
            block2.style.width = '100px';
            resetTransition(block2);

            block5.style.transition = 'none';
            block5.style.width = '0px';
            resetTransition(block5);

            const image1 = block1.children[0].src;
            moveImage(block2, block1);
            moveImage(block3, block2);
            moveImage(block4, block3);
            moveImage(block5, block4);
            block5.children[0].src = image1;
        }, 1 * 1000);
    }

    function moveImage(from, to) {
        const img = from.children[0].src;
        to.children[0].src = img;
    }

    function resetTransition(block) {
        setTimeout(function () {
            block.style.transition = 'all 1s';
        }, 100);
    }
});

