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

// キラキラパーティクル生成
const sparkleContainer = document.querySelector('.sparkle-container');
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // ランダムな位置
    const maxX = sparkleContainer.offsetWidth;
    const maxY = sparkleContainer.offsetHeight;
    sparkle.style.left = `${Math.random() * maxX}px`;
    sparkle.style.top = `${Math.random() * maxY}px`;
    
    // ランダムなアニメーション遅延と継続時間
    sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
    sparkle.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    
    sparkleContainer.appendChild(sparkle);
    
    // アニメーション終了後に削除
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// 定期的にキラキラを生成
setInterval(createSparkle, 300);
