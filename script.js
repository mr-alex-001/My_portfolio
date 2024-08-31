// <script>
  document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    this.querySelector('svg:nth-child(1)').classList.toggle('hidden');
    this.querySelector('svg:nth-child(2)').classList.toggle('hidden');
  });
// </script>
