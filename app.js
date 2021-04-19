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
    const lowfreqButton = document.createElement('button');
    const obnoxiousButton = document.createElement('button');
    
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

    lowfreqButton.classList.add('subBtn', 'fartPosition');
    lowfreqButton.id = 'lowfreq';
    lowfreqButton.onclick = lowfreqListner;
    lowfreqButton.textContent = 'Deep';
    parent.appendChild(lowfreqButton);

    obnoxiousButton.classList.add('subBtn', 'fartPosition');
    obnoxiousButton.id = 'obnoxious';
    obnoxiousButton.onclick = obnoxiousListner;
    obnoxiousButton.textContent = 'Obnoxious';
    parent.appendChild(obnoxiousButton);
    
    }
}

function removeFarts() {
    
    const wet = document.getElementById('wet');
    const perfect = document.getElementById('perfect');
    const long = document.getElementById('long');
    const short = document.getElementById('short');
    const lowfreq = document.getElementById('lowfreq');
    const obnoxious = document.getElementById('obnoxious');

    if(fartClicks % 2 !== 0) {
        wet.remove();
        perfect.remove();
        long.remove();
        short.remove();
        lowfreq.remove();
        obnoxious.remove();
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
function lowfreqListner() {
    const perfectFart = document.getElementById('lowfreq');
    perfectFart.addEventListener('click', playSound('lowfreqFart'));
}
function obnoxiousListner() {
    const perfectFart = document.getElementById('obnoxious');
    perfectFart.addEventListener('click', playSound('obnoxiousFart'));
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
    const slapButton = document.createElement('button');
    const screamButton = document.createElement('button');
    const smackButton = document.createElement('button');
    const squeakyButton = document.createElement('button');
    const standardButton = document.createElement('button');

    if(sexClicks === 0 || sexClicks % 2 !== 0) {
        absurdButton.classList.add('subBtn', 'sexPosition');
        absurdButton.id = 'absurd';
        absurdButton.onclick = absurdListner;
        absurdButton.textContent = 'Woman';
        parent.appendChild(absurdButton);

        slapButton.classList.add('subBtn', 'sexPosition');
        slapButton.id = 'slap';
        slapButton.onclick = slapListner;
        slapButton.textContent = 'Slap';
        parent.appendChild(slapButton);

        screamButton.classList.add('subBtn', 'sexPosition');
        screamButton.id = 'scream';
        screamButton.onclick = screamListner;
        screamButton.textContent = 'Scream';
        parent.appendChild(screamButton);

        smackButton.classList.add('subBtn', 'sexPosition');
        smackButton.id = 'smack';
        smackButton.onclick = smackListner;
        smackButton.textContent = 'Smack';
        parent.appendChild(smackButton);

        squeakyButton.classList.add('subBtn', 'sexPosition');
        squeakyButton.id = 'squeaky';
        squeakyButton.onclick = squeakyListner;
        squeakyButton.textContent = 'Squeaky';
        parent.appendChild(squeakyButton);

        standardButton.classList.add('subBtn', 'sexPosition');
        standardButton.id = 'standard';
        standardButton.onclick = standardListner;
        standardButton.textContent = 'Ok';
        parent.appendChild(standardButton);


    }else{
        document.getElementById('absurd').remove();
        document.getElementById('slap').remove();
        document.getElementById('scream').remove();
        document.getElementById('smack').remove();
        document.getElementById('squeaky').remove();
        document.getElementById('standard').remove();
    }
}

function absurdListner() {
    const absurdSex = document.getElementById('absurd');
    absurdSex.addEventListener('click', playSound('absurdSex'));
}
function slapListner() {
    const slapSex = document.getElementById('slap');
    slapSex.addEventListener('click', playSound('slapSex'));
}
function screamListner() {
    const screamSex = document.getElementById('scream');
    screamSex.addEventListener('click', playSound('screamSex'));
}
function smackListner() {
    const smackSex = document.getElementById('smack');
    smackSex.addEventListener('click', playSound('smackSex'));
}
function squeakyListner() {
    const squeakySex = document.getElementById('squeaky');
    squeakySex.addEventListener('click', playSound('squeakySex'));
}
function standardListner() {
    const standardSex = document.getElementById('standard');
    standardSex.addEventListener('click', playSound('standardSex'));
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
        bigButton.textContent = 'Big';
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

zooBtn.onclick = function addZoo() {

    const parent = document.getElementById('zooContainer');
    const chickenButton = document.createElement('button'),
          cowButton = document.createElement('button'),
          donkeyButton = document.createElement('button'),
          goatButton = document.createElement('button'),
          hedgehogButton = document.createElement('button'),
          roosterButton = document.createElement('button');

    if(zooClicks === 0 || zooClicks % 2 === 0) {
        chickenButton.classList.add('subBtn', 'zooPosition');
        chickenButton.id = 'chicken';
        chickenButton.onclick = chickenListner;
        chickenButton.textContent = 'Chicken';
        parent.appendChild(chickenButton);

        cowButton.classList.add('subBtn', 'zooPosition');
        cowButton.id = 'cow';
        cowButton.onclick = cowListner;
        cowButton.textContent = 'Cow';
        parent.appendChild(cowButton);

        donkeyButton.classList.add('subBtn', 'zooPosition');
        donkeyButton.id = 'donkey';
        donkeyButton.onclick = donkeyListner;
        donkeyButton.textContent = 'Donkey';
        parent.appendChild(donkeyButton);

        goatButton.classList.add('subBtn', 'zooPosition');
        goatButton.id = 'goat';
        goatButton.onclick = goatListner;
        goatButton.textContent = 'Goat';
        parent.appendChild(goatButton);

        hedgehogButton.classList.add('subBtn', 'zooPosition');
        hedgehogButton.id = 'hedgehog';
        hedgehogButton.onclick = hedgehogListner;
        hedgehogButton.textContent = 'Hedgehog';
        parent.appendChild(hedgehogButton);

        roosterButton.classList.add('subBtn', 'zooPosition');
        roosterButton.id = 'rooster';
        roosterButton.onclick = roosterListner;
        roosterButton.textContent = 'Rooster';
        parent.appendChild(roosterButton);


    }else{
        document.getElementById('chicken').remove();
        document.getElementById('cow').remove();
        document.getElementById('donkey').remove();
        document.getElementById('goat').remove();
        document.getElementById('hedgehog').remove();
        document.getElementById('rooster').remove();
    }
}

function chickenListner() {
    const chicken = document.getElementById('chicken');
    chicken.addEventListener('click', playSound('chickenZoo'));
}
function cowListner() {
    const cow = document.getElementById('cow');
    cow.addEventListener('click', playSound('cowZoo'));
}
function donkeyListner() {
    const donkey = document.getElementById('donkey');
    donkey.addEventListener('click', playSound('donkeyZoo'));
}
function goatListner() {
    const goat = document.getElementById('goat');
    goat.addEventListener('click', playSound('goatZoo'));
}
function hedgehogListner() {
    const hedgehog = document.getElementById('hedgehog');
    hedgehog.addEventListener('click', playSound('hedgehogZoo'));
}
function roosterListner() {
    const rooster = document.getElementById('rooster');
    rooster.addEventListener('click', playSound('roosterZoo'));
}

            //ENDZOO STARTTHEME

let themeClicks = 0;
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', themeCount);
function themeCount() {
    console.log(themeClicks);
    return themeClicks++;
}

themeBtn.onclick = function addTheme() {

    const parent = document.getElementById('themeContainer');
    const cheerButton = document.createElement('button'),
          wwiiButton = document.createElement('button'),
          phoneButton = document.createElement('button'),
          stormButton = document.createElement('button'),
          typingButton = document.createElement('button'),
          infernoButton = document.createElement('button');

    if(themeClicks === 0 || themeClicks % 2 === 0) {
        cheerButton.classList.add('subBtn', 'themePosition');
        cheerButton.id = 'cheer';
        cheerButton.onclick = cheerListner;
        cheerButton.textContent = 'Cheers';
        parent.appendChild(cheerButton);

        wwiiButton.classList.add('subBtn', 'themePosition');
        wwiiButton.id = 'wwii';
        wwiiButton.onclick = wwiiListner;
        wwiiButton.textContent = 'Siren';
        parent.appendChild(wwiiButton);

        phoneButton.classList.add('subBtn', 'themePosition');
        phoneButton.id = 'phone';
        phoneButton.onclick = phoneListner;
        phoneButton.textContent = 'Phone';
        parent.appendChild(phoneButton);

        stormButton.classList.add('subBtn', 'themePosition');
        stormButton.id = 'storm';
        stormButton.onclick = stormListner;
        stormButton.textContent = 'Storm';
        parent.appendChild(stormButton);

        typingButton.classList.add('subBtn', 'themePosition');
        typingButton.id = 'typing';
        typingButton.onclick = typingListner;
        typingButton.textContent = 'Typing';
        parent.appendChild(typingButton);

        infernoButton.classList.add('subBtn', 'themePosition');
        infernoButton.id = 'inferno';
        infernoButton.onclick = infernoListner;
        infernoButton.textContent = 'Inferno';
        parent.appendChild(infernoButton);


    }else{
        document.getElementById('cheer').remove();
        document.getElementById('wwii').remove();
        document.getElementById('phone').remove();
        document.getElementById('storm').remove();
        document.getElementById('typing').remove();
        document.getElementById('inferno').remove();
    }
}

function cheerListner() {
    const cheer = document.getElementById('cheer');
    cheer.addEventListener('click', playSound('cheerTheme'));
}
function wwiiListner() {
    const wwii = document.getElementById('wwii');
    wwii.addEventListener('click', playSound('wwiiTheme'));
}
function phoneListner() {
    const phone = document.getElementById('phone');
    phone.addEventListener('click', playSound('phoneTheme'));
}
function stormListner() {
    const storm = document.getElementById('storm');
    storm.addEventListener('click', playSound('stormTheme'));
}
function typingListner() {
    const typing = document.getElementById('typing');
    typing.addEventListener('click', playSound('typingTheme'));
}
function infernoListner() {
    const inferno = document.getElementById('inferno');
    inferno.addEventListener('click', playSound('infernoTheme'));
}

            //ENDTHEME STARTSCREAM

let screamClicks = 0;
const screamBtn = document.getElementById('screamBtn');
screamBtn.addEventListener('click', screamCount);
function screamCount() {
    console.log(screamClicks);
    return screamClicks++;
}

screamBtn.onclick = function addScream() {

    const parent = document.getElementById('screamContainer');
    const exageratedButton = document.createElement('button'),
          retardedButton = document.createElement('button'),
          shortscrButton = document.createElement('button'),
          tragicButton = document.createElement('button'),
          womanButton = document.createElement('button');
          abnormalButton = document.createElement('button');

    if(screamClicks === 0 || screamClicks % 2 === 0) {
        exageratedButton.classList.add('subBtn', 'screamPosition');
        exageratedButton.id = 'exagerated';
        exageratedButton.onclick = exageratedListner;
        exageratedButton.textContent = 'Exaggerated';
        parent.appendChild(exageratedButton);

        retardedButton.classList.add('subBtn', 'screamPosition');
        retardedButton.id = 'retarded';
        retardedButton.onclick = retardedListner;
        retardedButton.textContent = 'Retarded';
        parent.appendChild(retardedButton);

        shortscrButton.classList.add('subBtn', 'screamPosition');
        shortscrButton.id = 'shortscr';
        shortscrButton.onclick = shortscrListner;
        shortscrButton.textContent = 'Short';
        parent.appendChild(shortscrButton);

        tragicButton.classList.add('subBtn', 'screamPosition');
        tragicButton.id = 'tragic';
        tragicButton.onclick = tragicListner;
        tragicButton.textContent = 'Tragic';
        parent.appendChild(tragicButton);

        womanButton.classList.add('subBtn', 'screamPosition');
        womanButton.id = 'woman';
        womanButton.onclick = womanListner;
        womanButton.textContent = 'Woman';
        parent.appendChild(womanButton);

        abnormalButton.classList.add('subBtn', 'screamPosition');
        abnormalButton.id = 'abnormal';
        abnormalButton.onclick = abnormalListner;
        abnormalButton.textContent = 'Abnormal';
        parent.appendChild(abnormalButton);


    }else{
        document.getElementById('exagerated').remove();
        document.getElementById('retarded').remove();
        document.getElementById('shortscr').remove();
        document.getElementById('tragic').remove();
        document.getElementById('woman').remove();
        document.getElementById('abnormal').remove();
    }
}

function exageratedListner() {
    const exagerated = document.getElementById('exagerated');
    exagerated.addEventListener('click', playSound('exageratedScream'));
}
function retardedListner() {
    const retarded = document.getElementById('retarded');
    retarded.addEventListener('click', playSound('retardedScream'));
}
function shortscrListner() {
    const shortscr = document.getElementById('shortscr');
    shortscr.addEventListener('click', playSound('shortScream'));
}
function tragicListner() {
    const tragic = document.getElementById('tragic');
    tragic.addEventListener('click', playSound('tragicScream'));
}
function womanListner() {
    const woman = document.getElementById('woman');
    woman.addEventListener('click', playSound('womanScream'));
}
function abnormalListner() {
    const abnormal = document.getElementById('abnormal');
    abnormal.addEventListener('click', playSound('abnormalScream'));
}

            //ENDSCREAM STARTMISC

function playSound(id) {
    const sound = document.getElementById(id);
    sound.play();
    sound.currentTime = 0;
}

document.addEventListener('keydown', soundHandler)

function soundHandler() {

    let allSounds = document.querySelectorAll('audio');

    if(event.keyCode === 32) {
        event.preventDefault();
        for (let i = 0; i < allSounds.length; i++) {
        allSounds[i].pause();
        allSounds.currentTime = 0;
        }
    }else if (event.keyCode === 13) {
        event.preventDefault();
        for(let i = 0; i < allSounds.length; i++) {
            allSounds[i].play();
            allSounds.currentTime = 0;
        }
    }
}