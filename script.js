const left = document.getElementById('left');
const right = document.getElementById('right');
const imagePrev = document.getElementById('imagePrev');
const imageNext = document.getElementById('imageNext');
let counter = 0;

const images = ['image1.jpg','image2.jpg','image3.jpg']; // Add images

// Set the first image to show in the slider
let currentImage = images[0];
imageNext.src = currentImage;
let currentPrevImage = images[images.length-1];
imagePrev.src = currentPrevImage;

left.addEventListener('click', () => {
    slide('slideInRight');

    let prevCounter = counter; 
    counter--;
    if (counter < 0){
        counter = images.length-1
    }

    updateImage(prevCounter, counter);
});

right.addEventListener('click', () => {
    slide('slideInLeft');

    let prevCounter = counter; 
    counter++;
    if (counter > images.length-1){
        counter = 0
    }
    
    updateImage(prevCounter, counter);
});

let slide = (direction) => {
    imageNext.classList.remove('slideInRight'); // reset animation
    imageNext.classList.remove('slideInLeft'); // reset animation
    void imageNext.offsetWidth; // trigger reflow
    imageNext.classList.add(direction); // start animation
}

let updateImage = (prevCounter, counter) => {
    currentPrevImage = images[prevCounter];
    imagePrev.src = currentPrevImage;
    currentImage = images[counter];
    imageNext.src = currentImage;
}
