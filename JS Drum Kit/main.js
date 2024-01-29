// function removeTransition(e) {
//     if (e.propertyName !==  'transform') return;
//     e.target.classList.remove('playing');
// }

// function playSound(e) {
//     const audio  = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key  = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     // Check if correct audio file is found:
//     if(!audio) return;             // If not, stop the function right away

//     // Add class to start animation:
//     key.classList.add('playing');   // Adding playing class to div element
//     audio.currentTime = 0;         // Reset sound to beginning of audio clip
//     audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);




function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);