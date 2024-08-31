document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeTextBtn');
    button.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.querySelector('h1').textContent = 'Text Changed!';
    });
});