// Скрипт для прокрутки к элементу с id="top"
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    document.getElementById('top').scrollIntoView({
        behavior: 'smooth' // Плавная прокрутка
    });
});