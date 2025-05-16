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
<script>
  const grid = document.getElementById('productGrid');
  const items = Array.from(grid.children);
  const showMoreBtn = document.getElementById('showMoreBtn');

  function getInitialVisibleCount() {
    return window.innerWidth <= 768 ? 6 : 5; // 6 on mobile, 5 on desktop
  }

  function showItems(count) {
    items.forEach((item, i) => {
      item.style.display = (i < count) ? 'block' : 'none';
    });
  }

  function init() {
    const initialCount = getInitialVisibleCount();
    showItems(initialCount);
    if (items.length <= initialCount) {
      showMoreBtn.style.display = 'none';
    } else {
      showMoreBtn.style.display = 'block';
    }
  }

  showMoreBtn.addEventListener('click', () => {
    items.forEach(item => item.style.display = 'block');
    showMoreBtn.style.display = 'none'; // Hide button after expanding
  });

  window.addEventListener('resize', () => {
    init();
  });

  // Initialize on page load
  init();
</script>
