// Function to apply speed
function applySavedSpeed() {
    chrome.storage.local.get(["savedSpeed"], (data) => {
        const video = document.querySelector('video');
        if (video && data.savedSpeed) {
            video.playbackRate = data.savedSpeed;
        }
    });
}

// Check for ads and skip them
function handleAds() {
    const video = document.querySelector('video');
    const adShowing = document.querySelector('.ad-showing, .ad-interrupting');

    if (adShowing && video) {
        video.muted = true;
        video.playbackRate = 16;
        if (isFinite(video.duration)) video.currentTime = video.duration - 0.1;

        chrome.runtime.sendMessage({ action: "incrementCount" });
    } else {
        // If no ad is showing, make sure our custom speed is applied
        applySavedSpeed();
    }
}

setInterval(handleAds, 500);