let fartClicks = 0;
const fartBtn = document.getElementById('fartBtn')
fartBtn.addEventListener('click', fartCounter)

function fartCounter() {
     return fartClicks++;
}

function addFarts() {
    
    const parent = document.getElementById('subBtnLeft');
    const wetButton = document.createElement('button');
    const perfectButton = document.createElement('button');
    const longButton = document.createElement('button');
    const shortButton = document.createElement('button');
    
    if(fartClicks === 0 || fartClicks % 2 === 0) {

    wetButton.classList.add('subBtn');
    wetButton.id = 'wet';
    wetButton.onclick = wetListner;
    wetButton.textContent = 'Wet';
    parent.appendChild(wetButton);

    perfectButton.classList.add('subBtn');
    perfectButton.id = 'perfect';
    perfectButton.onclick = perfectListner;
    perfectButton.textContent = 'Classic';
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
    return;
    }
}

function removeFarts() {
    
    const wet = document.getElementById('wet');
    const perfect = document.getElementById('perfect');
    const long = document.getElementById('long');
    const short = document.getElementById('short');

    if(fartClicks % 2 !== 0) {
        wet.remove();
        perfect.remove();
        long.remove();
        short.remove();
    }
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
