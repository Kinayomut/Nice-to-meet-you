const sorry = document.getElementById('sorry');
const red = document.getElementById('red-button');
const audio = document.getElementById('audio');
const audioStatus = document.getElementById('audio-status');
const emojiRain = document.getElementById('emoji-rain');

if (red && sorry && audio && audioStatus && emojiRain) {
    const name = new URLSearchParams(window.location.search).get('name')?.trim();

    red.addEventListener('click', function() {
        sorry.textContent = name
            ? `Sorry na agad HAHAHAHA, ${name}!`
            : 'Sorry na agad HAHAHAHA!';

        audio.currentTime = 0;
        audio.play().then(function() {
            audioStatus.textContent = '';
        }).catch(function() {
            audioStatus.textContent = 'The audio could not be played. Please check the audio file.';
        });

        for (let i = 0; i < 12; i++) {
            const emoji = document.createElement('span');
            const duration = 2.5 + Math.random() * 2;
            emoji.className = 'falling-emoji';
            emoji.textContent = '😂';
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.fontSize = `${24 + Math.random() * 24}px`;
            emoji.style.setProperty('--fall-duration', `${duration}s`);
            emoji.addEventListener('animationend', function() {
                emoji.remove();
            });
            emojiRain.appendChild(emoji);
        }
    });
}
