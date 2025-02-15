// script.js

// Function to show specific section when clicked
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('show-section');
        section.classList.add('hide-section');
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'flex';
    activeSection.classList.remove('hide-section');
    activeSection.classList.add('show-section');
    
    // Optional: scroll to the section
    window.scrollTo({ top: activeSection.offsetTop - 50, behavior: 'smooth' });
}

// Initial setup: load the first section (About)
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
