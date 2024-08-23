const images = [
    { src: './img/adse.png', text: 'ASEAN DATA Science Explorers 2023 Enabblement Session - SAP Analytics and Cloud Training Session' },
    { src: './img/CISCODS.png', text: 'Text for Image 2' },
    { src: './img/COCRCG.png', text: 'Text for Image 3' }
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const textElement = document.getElementById('text');

function updateContent() {
    imageElement.src = images[currentIndex].src;
    textElement.textContent = images[currentIndex].text;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
});

// Initialize with the first image and text
updateContent();