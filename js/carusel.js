document.addEventListener("DOMContentLoaded", function () {
    
    const next = document.getElementsByClassName('next')[0];

    const block1 = document.getElementsByClassName('blcok1')[0];
    const block2 = document.getElementsByClassName('block2')[0];
    const block3 = document.getElementsByClassName('block3')[0];
    const block4 = document.getElementsByClassName('block4')[0];
    const block5 = document.getElementsByClassName('block5')[0];



    next.addEventListener('click', moveNext);

    function moveNext(){
        block2.style.width = '0px';
        block5.style.width = '100px';
    }

});

