document.addEventListener('DOMContentLoaded', function() {
    const musicButton = document.getElementById('musicButton');
    const actionButton = document.getElementById('actionButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const popupOverlay = document.getElementById('popupOverlay');
    const emojiDisplay = document.getElementById('emojiDisplay');
    const emoji = document.getElementById('emoji');
    const countdown = document.getElementById('countdown');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const mainContent = document.querySelector('.main-content');

    let isPlaying = false;

    musicButton.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicButton.classList.remove('playing');
        } else {
            backgroundMusic.play();
            musicButton.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    actionButton.addEventListener('click', function() {
        popupOverlay.style.display = 'flex';
    });

    noButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        popupOverlay.style.display = 'none';
        emojiDisplay.style.display = 'flex';
        emoji.textContent = '😠';
        
        let timeLeft = 3;
        countdown.textContent = `Your computer will explode in ${timeLeft} seconds`;
        
        const countdownInterval = setInterval(() => {
            timeLeft--;
            countdown.textContent = `Your computer will explode in ${timeLeft} seconds`;
            
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                emoji.style.display = 'none';
                countdown.style.display = 'none';
                const gif = document.createElement('img');
                gif.src = 'YVz6fUT.gif';
                gif.style.maxWidth = '100%';
                gif.style.maxHeight = '80vh';
                emojiDisplay.appendChild(gif);
            }
        }, 1000);
    });

    yesButton.addEventListener('click', function() {
        mainContent.style.display = 'none';
        popupOverlay.style.display = 'none';
        emojiDisplay.style.display = 'flex';
        emoji.textContent = '😊';
    });
});
