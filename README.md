# YT Super Speed (1x-16x)

A Chrome extension that enhances your YouTube experience by allowing you to set custom playback speeds from 1x to 16x and automatically skip ads.

**Repository**: [https://github.com/hilalahmad0101/speed-up-youtube-video](https://github.com/hilalahmad0101/speed-up-youtube-video)

## Features

- **Custom Speed Control**: Adjust video playback speed from 1x to 16x using a slider in the extension popup.
- **Speed Persistence**: Your selected speed is saved and applied automatically to new YouTube videos.
- **Ad Skipping**: Automatically detects and skips YouTube ads by speeding them up to 16x and jumping to the end.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/hilalahmad0101/speed-up-youtube-video.git
   cd speed-up-youtube-video
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the cloned folder containing the extension files (`manifest.json`, `popup.html`, `popup.js`, `content.js`).
5. The extension should now be installed and visible in your extensions list.

## Usage

1. Navigate to any YouTube video.
2. Click the extension icon in the Chrome toolbar to open the popup.
3. Use the slider to set your desired playback speed (1x to 16x).
4. The speed will be applied immediately and saved for future videos.
5. Ads will be automatically skipped without any user interaction.

## Permissions

- **storage**: To save your preferred speed setting.
- **activeTab**: To modify the playback speed on the current YouTube tab.

## Compatibility

- Works on YouTube.com and related domains.
- Requires Chrome browser with Manifest V3 support.

## License

This project is open-source. Feel free to modify and distribute as per your needs.