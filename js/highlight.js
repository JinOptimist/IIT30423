document.addEventListener("DOMContentLoaded", function () {

    var images = document.getElementsByClassName('image');

    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        image.addEventListener('click', onImageClick)
    }

    function onImageClick(evt){
        for (let i = 0; i < images.length; i++) {
            const imageDiv = images[i];
            imageDiv.children[0].style.border = '0px red solid';
        }

        var imageWhichWeClick = evt.target;
        imageWhichWeClick.style.border = '10px red solid';
    }

});