document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById('container');
    let users = [];

    init();

    function init() {
        for (let i = 0; i < 10; i++) {
            let user = {
                name: 'Ivan ' + i,
                age: 40 - i
            }

            users.push(user)
        }
        drawUser()
    }

    function drawUser(){
        container.innerHTML = '';
        for (let i = 0; i < users.length; i++) {
            const user = users[i];

            const div = document.createElement('div');
            div.innerHTML = `${user.name} (${user.age})`;

            container.innerHTML += div.outerHTML;
        }
    }

    document
        .querySelector('.sort-age')
        .addEventListener('click', function(){

            users = users.sort((a,b) => a.age - b.age);
            drawUser();

        });



});



