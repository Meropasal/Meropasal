<script>
// Shuffle function
function shuffleGridItems() {
  const grid = document.getElementById('productGrid');
  const items = Array.from(grid.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(item));
}

// Initial shuffle and set interval
shuffleGridItems();
setInterval(shuffleGridItems, 5 * 60 * 1000); // Every 5 minutes
</script>