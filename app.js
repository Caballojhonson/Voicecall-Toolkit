function addFarts() {
    const parent = document.getElementById('randBtnContainer');
    const wetButton = document.createElement('button');
    const perfectButton = document.createElement('button');
    const longButton = document.createElement('button');
    const shortButton = document.createElement('button');
    
    wetButton.classList.add('subBtn');
    wetButton.id = 'wet';
    wetButton.onclick = fartListner;
    wetButton.textContent = 'WET';
    parent.appendChild(wetButton);

    perfectButton.classList.add('subBtn');
    perfectButton.id = 'perfect';
    perfectButton.onclick = fartListner;
    perfectButton.textContent = 'Perfect';
    parent.appendChild(perfectButton);
}

function fartListner() {
    const wetFart = document.getElementById('wet');
    wetFart.addEventListener('click', playSound('wetfart'));
    console.log('FARTLISTEN');
    const perfectFart = document.getElementById('perfect');
    perfectFart.addEventListener('click', playSound('perfectFart'));
}

function playSound(id) {
    const sound = document.getElementById(id);
    sound.play();
    console.log('PLAY')
}