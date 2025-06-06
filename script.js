const button = document.getElementById('musicButton');
        const music = document.getElementById('backgroundMusic');
        let isPlaying = false;

        button.addEventListener('click', () => {
            if (isPlaying) {
                music.pause();
                button.classList.remove('playing');
                button.querySelector('.button-text').textContent = 'Turn On Music';
            } else {
                music.play();
                button.classList.add('playing');
                button.querySelector('.button-text').textContent = 'Turn Off Music';
            }
            isPlaying = !isPlaying;
        });