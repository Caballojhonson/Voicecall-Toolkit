function addFarts() {
    const parent = document.getElementById('randBtnContainer');
    const wetButton = document.createElement('button');
    const perfectButton = document.createElement('button');
    const longButton = document.createElement('button');
    const shortButton = document.createElement('button');
    
    wetButton.classList.add('subBtn');
    wetButton.id = 'wet';
    wetButton.onclick = wetListner;
    wetButton.textContent = 'WET';
    parent.appendChild(wetButton);

    perfectButton.classList.add('subBtn');
    perfectButton.id = 'perfect';
    perfectButton.onclick = perfectListner;
    perfectButton.textContent = 'Perfect';
    parent.appendChild(perfectButton);

    longButton.classList.add('subBtn');
    longButton.id = 'long';
    longButton.onclick = longListner;
    longButton.textContent = 'Long';
    parent.appendChild(longButton);

    shortButton.classList.add('subBtn');
    shortButton.id = 'short';
    shortButton.onclick = shortListner;
    shortButton.textContent = 'Short';
    parent.appendChild(shortButton);
}

function removeFarts() {
    // if clickcount is odd, display. If pair, remove.
}

function wetListner() {
    const wetFart = document.getElementById('wet');
    wetFart.addEventListener('click', playSound('wetfart'));
}
function perfectListner() {
    const perfectFart = document.getElementById('perfect');
    perfectFart.addEventListener('click', playSound('perfectFart'));
}
function longListner() {
    const perfectFart = document.getElementById('long');
    perfectFart.addEventListener('click', playSound('longFart'));
}
function shortListner() {
    const perfectFart = document.getElementById('short');
    perfectFart.addEventListener('click', playSound('shortFart'));
}

function playSound(id) {
    const sound = document.getElementById(id);
    sound.play();
}