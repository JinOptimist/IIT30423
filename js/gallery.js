document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById('container');
    const bottomContainer = document.getElementById('bottomContainer');
    const next = document.getElementById('next');

    const animationTime = 1 * 1000;
    const animationTimeInSeconds = animationTime / 1000;

    const imageWidth = 400;
    const imageHeight = 300;
    const imageoffset = 50;

    const countOfImageOnThePage = 6;
    const images = [];
    const imagesCount = 12;
    
    let currentPage = 0;
    const maxPage = imagesCount / countOfImageOnThePage;

    next.addEventListener('click', onNextClick)

    init();

    function init() {
        fillImageArray();
        drawPage(currentPage);
        drawBottomLine(currentPage + 1);

        container.style.height = (imageHeight + imageoffset) * 2 + imageoffset / 2;
        container.style.width = (imageWidth + imageoffset) * 3 + imageoffset / 2;

        bottomContainer.style.height = (imageHeight + imageoffset) / 2 + imageoffset / 4;
        bottomContainer.style.width = container.style.width;
    }

    function fillImageArray() {
        for (let i = 0; i < imagesCount; i++) {
            let image = `images/${i + 1}.jpg`;
            images.push(image)
        }
    }

    function drawPage(page) {
        container.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const image = images[getImageIndex(page, i)];

            const div = document.createElement('div');
            div.classList.add('image');
            div.style.width = imageWidth;
            div.style.height = imageHeight;
            div.style.transition = `all ${animationTimeInSeconds}s`;

            placeImageInMainContainer(div, i);

            const img = document.createElement('img');
            img.setAttribute('src', image)
            img.style.maxWidth = imageWidth;
            img.style.maxHeight = imageHeight;
            img.style.transition = `all ${animationTimeInSeconds}s`;
            div.innerHTML += img.outerHTML;

            container.innerHTML += div.outerHTML;
        }
    }

    function drawBottomLine(page) {
        const halfWidth = imageWidth / 2;
        const halfHeight = imageHeight / 2;
        const halfImageoffset = imageoffset / 2;
        bottomContainer.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const image = images[getImageIndex(page, i)];

            const div = document.createElement('div');
            div.classList.add('image');
            div.style.top = imageoffset * 3 + imageHeight * 2;
            div.style.left = (halfImageoffset + halfWidth) * i;

            div.style.width = halfWidth;
            div.style.height = halfHeight;
            div.style.transition = `all ${animationTimeInSeconds}s`;


            const img = document.createElement('img');
            img.setAttribute('src', image)
            img.style.maxWidth = halfWidth;
            img.style.maxHeight = halfHeight;
            img.style.transition = `all ${animationTimeInSeconds}s`;
            div.innerHTML += img.outerHTML;


            bottomContainer.innerHTML += div.outerHTML;
        }
    }

    function getImageIndex(page, index){
        return ((page * countOfImageOnThePage) + index) % imagesCount;
    }

    function onNextClick() {
        const imagesFromMainContainer = document.querySelectorAll('#container .image');
        for (let i = 0; i < imagesFromMainContainer.length; i++) {
            const image = imagesFromMainContainer[i];
            image.style.top = -1000;
        }

        const imagesFromBottomContainer = document.querySelectorAll('#bottomContainer .image');
        for (let i = 0; i < imagesFromBottomContainer.length; i++) {
            const image = imagesFromBottomContainer[i];
            placeImageInMainContainer(image, i);
            image.style.width = imageWidth;
            image.style.height = imageHeight;
        }
        const imgFromBottomContainer = document.querySelectorAll('#bottomContainer .image img');
        for (let i = 0; i < imgFromBottomContainer.length; i++) {
            const img = imgFromBottomContainer[i];
            img.style.maxWidth = imageWidth;
            img.style.maxHeight = imageHeight;
        }

        setTimeout(() => {
            currentPage++;
            currentPage = currentPage % maxPage;

            drawBottomLine(currentPage + 1);
            drawPage(currentPage);
            
        }, animationTime);
    }

    function placeImageInMainContainer(image, index) {
        const row = Math.floor(index / 3);
        image.style.top = imageoffset * (row + 1) + imageHeight * row;
        const column = index % 3;
        image.style.left = imageoffset * (column + 1) + column * imageWidth;
    }
});


