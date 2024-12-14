function toggleSound() {
    var audio = document.getElementById('audioPlayer');
    var button = document.querySelector('button');
    
    if (audio.paused) {
        audio.play();
        button.textContent = 'Пауза';
    } else {
        audio.pause();
        button.textContent = 'Слушать';
    }
}