const keys = document.querySelectorAll(".key");
const note = document.querySelector(".nowplaying");
const structure = document.querySelector(".structure");
const sense = document.querySelector(".sense");
const hints = document.querySelectorAll(".hints");

function playNote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute("data-note");
    const structureNote = key.getAttribute("structure-note");
    const senseNote = key.getAttribute("sense-note");

    key.classList.add("playing");

    note.innerHTML = keyNote;
    structure.innerHTML = structureNote;
    sense.innerHTML = senseNote;

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;

    this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playNote);