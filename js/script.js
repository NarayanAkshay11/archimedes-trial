// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Counters (Replace with real numbers later)
document.getElementById('students-count').innerText = Math.floor(Math.random() * 1000);
document.getElementById('participations-count').innerText = Math.floor(Math.random() * 100);
document.getElementById('schools-count').innerText = Math.floor(Math.random() * 50);
