const slider = document.getElementById('speedSlider');
const display = document.getElementById('speedVal');
const countDisplay = document.getElementById('count');

// 1. Load saved data when popup opens
chrome.storage.local.get(["savedSpeed", "totalBlocked"], (data) => {
    if (data.savedSpeed) {
        slider.value = data.savedSpeed;
        display.innerText = data.savedSpeed;
    }
    if (data.totalBlocked) {
        countDisplay.innerText = data.totalBlocked;
    }
});

// 2. Save speed when slider moves
slider.oninput = function () {
    const val = parseFloat(this.value);
    display.innerText = val;

    // Save to storage
    chrome.storage.local.set({ savedSpeed: val });

    // Tell the video to change speed immediately
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, { type: "SET_SPEED", speed: val });
        }
    });
};