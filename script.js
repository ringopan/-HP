// スムーズスクロール
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

// スクロール時のフェードインアニメーション
const fadeInElements = document.querySelectorAll('.fade-in');

const checkFadeIn = () => {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);
