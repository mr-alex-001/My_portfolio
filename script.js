document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('mobile-menu');
    
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        
        // Toggle the visibility of the hamburger and close icons
        this.querySelector('svg:nth-child(1)').classList.toggle('hidden'); // Hamburger icon
        this.querySelector('svg:nth-child(2)').classList.toggle('hidden'); // Close icon
    });
});
