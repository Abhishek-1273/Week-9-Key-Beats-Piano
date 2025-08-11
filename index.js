// ✅ Key-to-sound mapping
const sounds = {
    "a": "sounds/c5.mp3",
    "s": "sounds/cc.mp3",
    "d": "sounds/d5.mp3",
    "f": "sounds/dd.mp3",
    "e": "sounds/e5.mp3",
    "r": "sounds/f5.mp3",
    "j": "sounds/ff.mp3",
    "k": "sounds/g5.mp3",
    "l": "sounds/gg.mp3",
    ";": "sounds/a5.mp3",
    "u": "sounds/aa.mp3",
    "o": "sounds/b5.mp3"
};

// ✅ For keys that don't match CSS class names
const keyMap = { ";": "ll" };

// 🎯 Handle Clicks
document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener("click", function () {
        const btnKey = Object.keys(keyMap).find(k => keyMap[k] === this.classList[0]) || this.classList[0];
        playSound(btnKey);
        animateButton(btnKey);
    });
});

// 🎯 Handle Keyboard
document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    playSound(key);
    animateButton(key);
});

// 🔊 Play sound if available
function playSound(key) {
    if (sounds[key]) {
        new Audio(sounds[key]).play();
    }
}

// ✨ Animate button
function animateButton(key) {
    const targetClass = keyMap[key] || key;
    const activeButton = document.querySelector("." + targetClass);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 200);
    }
}
