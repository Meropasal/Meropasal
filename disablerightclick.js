document.addEventListener(&#39;contextmenu&#39;, function(e) {
    if (e.target.tagName === &#39;IMG&#39;) {
        e.preventDefault(); // Disable right-click on images
    }
});
