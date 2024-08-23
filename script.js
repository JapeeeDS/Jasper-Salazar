const images = [
    { src: './img/adse.png', text: 'ASEAN DATA Science Explorers 2023 Enabblement Session - SAP Analytics and Cloud Training Session' },
    { src: './img/CISCODS.png', text: 'Certificate of Completion of Introduction to Data Science Course on CISCO Networking' },
    { src: './img/DS1.png', text: 'Fundamentals of Data Science Topic 1 Unleashing The Power of Data: A webinar Series on the Art and Science Data' },
    { src: './img/DS6.png', text: 'Igniting Collaboration and Innovation Unleashing The Power of Data: A webinar Series on the Art and Science Data' },
    { src: './img/COCRCG.png', text: 'Intership Training Certificate of Completion of RCG IT Philippines' },
    { src: './img/py.png', text: 'Certificate of Completion of Python Essentials 1 Course on CISCO Networking' },
    { src: './img/fm.png', text: 'Certificate of Completion of Getting Started with FIGMA on COURSERA offering lessons' },
    { src: './img/wp.png', text: 'Certificate of Completion of Build A free website with Wordpress on COURSERA offering lessons' }
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const textElement = document.getElementById('text');

function updateContent() {
    // Fade out
    imageElement.style.opacity = 0;
    textElement.style.opacity = 0;

    setTimeout(() => {
        // Update the content after the fade-out
        imageElement.src = images[currentIndex].src;
        textElement.textContent = images[currentIndex].text;

        // Fade in
        imageElement.style.opacity = 1;
        textElement.style.opacity = 1;
    }, 500); // Match the timeout with the CSS transition duration
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
});

// Initialize with the first image and text, and make sure they are visible
updateContent();
imageElement.style.opacity = 1;
textElement.style.opacity = 1;



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var navbar = document.querySelector('.navbar');
        navbar.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

