const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const leftSlider = document.getElementById("left-slider");
const rightSlider = document.getElementById("right-slider");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");
infoTitle.innerHTML = images[0].title;
infoText.innerHTML = images[0].text;

// slider di sinistra

for (i = 0; i < images.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = `img/${images[i].image}`;
    singleImg.classList.add('left-slider-img');

    if(i === 0){
        singleImg.classList.add('active');
    }

    leftSlider.append(singleImg);
}

// slider di destra

for (i = 0; i < images.length; i++) {
    const singleImg = document.createElement("img");
    singleImg.src = `img/${images[i].image}`;
    singleImg.classList.add('right-slider-img');

    if(i === 0){
        singleImg.classList.add('selected');
    }
    rightSlider.append(singleImg);
}

let currentImg = 0;
const listLeftImg = document.querySelectorAll('.left-slider-img');
const listRightImg = document.querySelectorAll('.right-slider-img');


const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

function next() {
    listLeftImg[currentImg].classList.remove('active');
    listRightImg[currentImg].classList.remove('selected');
    
    currentImg++;

    if(currentImg === (images.length)){
        currentImg = 0;
    }

    listLeftImg[currentImg].classList.add('active');
    listRightImg[currentImg].classList.add('selected');
    infoTitle.innerHTML = images[currentImg].title;
    infoText.innerHTML = images[currentImg].text;
}

function previous() {
    listLeftImg[currentImg].classList.remove('active');
    listRightImg[currentImg].classList.remove('selected');

    if(currentImg === 0){
        currentImg = images.length;
    }

    currentImg--;

    listLeftImg[currentImg].classList.add('active');
    listRightImg[currentImg].classList.add('selected');
    infoTitle.innerHTML = images[currentImg].title;
    infoText.innerHTML = images[currentImg].text;
}

downButton.addEventListener('click', function(){
    next();
});

upButton.addEventListener('click', function(){
    previous();
});

// BOTTONE START/STOP

const startStop = document.getElementById("start-stop");

let autoSlide = setInterval(next, 1000);

let onOff = 0;
let leftRight = 0;

startStop.addEventListener('click', function(){
    if(onOff % 2 === 0){
        clearInterval(autoSlide);
        startStop.innerHTML = "Avvia auto slider"
    }
    else if(onOff % 2 === 1){
        if(leftRight %2 === 0){
            autoSlide = setInterval(next, 1000);
        }
        else if(leftRight % 2 === 1){
            autoSlide = setInterval(previous, 1000);
        }
        startStop.innerHTML = "Stop auto slider";
    }
    onOff++;
});

// BOTTONE INVERT

const invert = document.getElementById("invert");

invert.addEventListener('click', function(){
    if(leftRight % 2 === 0  &&  onOff % 2 === 0){
        clearInterval(autoSlide);
        autoSlide = setInterval(previous, 1000);
        leftRight++;
    }
    else if(leftRight % 2 === 1 &&  onOff % 2 === 0){
        clearInterval(autoSlide);
        autoSlide = setInterval(next, 1000);
        leftRight++;
    }
});