// Disable right click on images and the whole page
document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'IMAGE' || e.target.tagName === 'SVG') {
        e.preventDefault();
    } else {
        e.preventDefault();
    }
}, false);

// Optional: Disable common keyboard shortcuts for copying/viewing source
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (
        e.key === 'u' || e.key === 'U' || // View source
        e.key === 's' || e.key === 'S' || // Save
        e.key === 'c' || e.key === 'C'    // Copy
    )) {
        e.preventDefault();
    }
});
