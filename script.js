
// Smooth scrolling for portfolio navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        console.log('Navigating to ' + this.getAttribute('href'));
    });
});

console.log("Welcome to Veena's Portfolio!");
