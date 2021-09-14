const images = [
    'images/player-1.png',
    'images/player-2.png',
    'images/player-3.png',
    'images/player-4.png',
    'images/player-5.png',
    'images/player-6.png',
    'images/player-7.png',
    'images/player-8.png',
    'images/player-9.png',
    'images/player-10.png',
    'images/player-11.png',
    'images/player-12.png'
];


let count = 0;
const img = document.getElementById('slider-img');
setInterval(() => {
    if (count >= images.length) {
        count = 0;
    }
    // console.log(count);
    img.setAttribute('src', images[count]);
    count++;
}, 1500);
