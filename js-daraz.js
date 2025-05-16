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
