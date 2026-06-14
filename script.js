// Dynamic project hover tracking logic
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle debug logger feedback loop simulation matching standard engineering consoles
            console.log(`Focusing metrics context: ${card.querySelector('h3').textContent}`);
        });
    });

    // Smooth scroll configuration tracking for general UI navigation metrics
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(l => l.style.color = '#8a99ad'); // Reset custom inline colors
            e.target.style.color = '#cb9d6f'; // Highlight clicked navigation point
        });
    });
});