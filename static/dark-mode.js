// JavaScript for toggling dark mode
const darkModeButton = document.getElementById('dark-mode-button');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        darkModeButton.innerText = 'Dark Mode: Off';
    } else {
        body.classList.add('dark-mode');
        darkModeButton.innerText = 'Dark Mode: On';
    }
});
