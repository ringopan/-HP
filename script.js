document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // ヘッダーの高さを考慮
            behavior: 'smooth'
        });
    });
});

// スクロール時のアニメーション
const fadeInElements = document.querySelectorAll('.fade-in');

const checkFadeIn = () => {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
            // Sweetsセクションのパーティクル開始
            if (element.id === 'sweets') {
                startSweetsSparkles();
            }
        }
    });
};

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// Homeセクションのキラキラパーティクル
const homeSparkleContainer = document.querySelector('#home .sparkle-container');
function createHomeSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    const maxX = homeSparkleContainer.offsetWidth;
    const maxY = homeSparkleContainer.offsetHeight;
    sparkle.style.left = `${Math.random() * maxX}px`;
    sparkle.style.top = `${Math.random() * maxY}px`;
    sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
    sparkle.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    homeSparkleContainer.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

setInterval(createHomeSparkle, 300);

// Sweetsセクションのキラキラパーティクル
const sweetsSparkleContainer = document.querySelector('#sweets .sparkle-container');
let sweetsSparkleInterval = null;
function createSweetsSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    const maxX = sweetsSparkleContainer.offsetWidth;
    const maxY = sweetsSparkleContainer.offsetHeight;
    sparkle.style.left = `${Math.random() * maxX}px`;
    sparkle.style.top = `${Math.random() * maxY}px`;
    sparkle.style.animationDelay = `${Math.random() * 1}s`;
    sparkle.style.animationDuration = `${0.8 + Math.random() * 1}s`;
    sweetsSparkleContainer.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

function startSweetsSparkles() {
    if (!sweetsSparkleInterval) {
        sweetsSparkleInterval = setInterval(createSweetsSparkle, 200); // より頻繁に
    }
}
