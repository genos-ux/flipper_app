
let header = document.querySelector('#body');
const btn = document.querySelector('.btn');
const spa = document.querySelector('.color')



let color = [];
let random_color = 0;

btn.addEventListener('click', () => {
    color = ['purple','brown','blue','wheat','whitesmoke','white','azure','cadetblue'];

    for(let i=0 ; i< color.length;i++){
        random_color = Math.floor(Math.random()*color.length);
    }

    header.style.background = color[random_color];
    spa.textContent = color[random_color];

})
