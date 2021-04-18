let fartClicks = 0;
const fartBtn = document.getElementById('fartBtn')
fartBtn.addEventListener('click', fartCounter)

function fartCounter() {
     return fartClicks++;
}

function addFarts() {
    
    const parent = document.getElementById('fartContainer');
    const wetButton = document.createElement('button');
    const perfectButton = document.createElement('button');
    const longButton = document.createElement('button');
    const shortButton = document.createElement('button');
    
    if(fartClicks === 0 || fartClicks % 2 === 0) {

    wetButton.classList.add('subBtn', 'fartPosition');
    wetButton.id = 'wet';
    wetButton.onclick = wetListner;
    wetButton.textContent = 'Wet';
    parent.appendChild(wetButton);

    perfectButton.classList.add('subBtn', 'fartPosition');
    perfectButton.id = 'perfect';
    perfectButton.onclick = perfectListner;
    perfectButton.textContent = 'Classic';
    parent.appendChild(perfectButton);

    longButton.classList.add('subBtn', 'fartPosition');
    longButton.id = 'long';
    longButton.onclick = longListner;
    longButton.textContent = 'Long';
    parent.appendChild(longButton);

    shortButton.classList.add('subBtn', 'fartPosition');
    shortButton.id = 'short';
    shortButton.onclick = shortListner;
    shortButton.textContent = 'Short';
    parent.appendChild(shortButton);
    
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

            //ENDFARTS STARTSEX

let sexClicks = 0;
const sexBtn = document.getElementById('sexBtn')
sexBtn.addEventListener('click', sexCount)
function sexCount() {
    console.log(sexClicks)
    return sexClicks++;
}

sexBtn.onclick = function addSex() {

    const parent = document.getElementById('sexContainer');
    const absurdButton = document.createElement('button');

    if(sexClicks === 0 || sexClicks % 2 !== 0) {
        absurdButton.classList.add('subBtn', 'sexPosition');
        absurdButton.id = 'absurd';
        absurdButton.onclick = absurdListner;
        absurdButton.textContent = 'Woman';
        parent.appendChild(absurdButton);
    }else{
        document.getElementById('absurd').remove()
    }
}

function absurdListner() {
    const absurdSex = document.getElementById('absurd');
    absurdSex.addEventListener('click', playSound('absurdSex'));
}

            //ENDSEX STARTBOOM

let boomClicks = 0;
const boomBtn = document.getElementById('boomBtn');
boomBtn.addEventListener('click', boomCount);
function boomCount() {
    console.log(boomClicks);
    return boomClicks++;
}

boomBtn.onclick = function addBoom() {

    const parent = document.getElementById('boomContainer');
    const artilleryButton = document.createElement('button'),
          bigButton = document.createElement('button'),
          cinematicButton = document.createElement('button'),
          deepButton = document.createElement('button'),
          distantButton = document.createElement('button'),
          gunButton = document.createElement('button');

    if(boomClicks === 0 || boomClicks % 2 === 0) {
        artilleryButton.classList.add('subBtn', 'boomPosition');
        artilleryButton.id = 'artillery';
        artilleryButton.onclick = artilleryListner;
        artilleryButton.textContent = 'Artillery';
        parent.appendChild(artilleryButton);

        bigButton.classList.add('subBtn', 'boomPosition');
        bigButton.id = 'big';
        bigButton.onclick = bigListner;
        bigButton.textContent = 'big';
        parent.appendChild(bigButton);

        cinematicButton.classList.add('subBtn', 'boomPosition');
        cinematicButton.id = 'cinematic';
        cinematicButton.onclick = cinematicListner;
        cinematicButton.textContent = 'Cinematic';
        parent.appendChild(cinematicButton);

        deepButton.classList.add('subBtn', 'boomPosition');
        deepButton.id = 'deep';
        deepButton.onclick = deepListner;
        deepButton.textContent = 'Deep';
        parent.appendChild(deepButton);

        distantButton.classList.add('subBtn', 'boomPosition');
        distantButton.id = 'distant';
        distantButton.onclick = distantListner;
        distantButton.textContent = 'Distant';
        parent.appendChild(distantButton);

        gunButton.classList.add('subBtn', 'boomPosition');
        gunButton.id = 'gun';
        gunButton.onclick = gunListner;
        gunButton.textContent = 'Gunshot';
        parent.appendChild(gunButton);


    }else{
        document.getElementById('artillery').remove();
        document.getElementById('big').remove();
        document.getElementById('cinematic').remove();
        document.getElementById('deep').remove();
        document.getElementById('distant').remove();
        document.getElementById('gun').remove();
    }
}

function artilleryListner() {
    const artillery = document.getElementById('artillery');
    artillery.addEventListener('click', playSound('artilleryBoom'));
}
function bigListner() {
    const big = document.getElementById('big');
    big.addEventListener('click', playSound('bigBoom'));
}
function cinematicListner() {
    const cinematic = document.getElementById('cinematic');
    cinematic.addEventListener('click', playSound('cinematicBoom'));
}
function deepListner() {
    const deep = document.getElementById('deep');
    deep.addEventListener('click', playSound('deepBoom'));
}
function distantListner() {
    const distant = document.getElementById('distant');
    distant.addEventListener('click', playSound('distantBoom'));
}
function gunListner() {
    const gun = document.getElementById('gun');
    gun.addEventListener('click', playSound('gunshot'));
}
            //ENDBOOM STARTZOO

let zooClicks = 0;
const zooBtn = document.getElementById('zooBtn');
zooBtn.addEventListener('click', zooCount);
function zooCount() {
    console.log(zooClicks);
    return zooClicks++;
}


function playSound(id) {
    const sound = document.getElementById(id);
    sound.play();
}
