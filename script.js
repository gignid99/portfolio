// Change theme functionality
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Change Theme';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        padding: 10px;
        background-color: #3a3a3a;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        if (body.style.backgroundColor === 'white') {
            body.style.backgroundColor = '#121212';
            body.style.color = '#e0e0e0';
        } else {
            body.style.backgroundColor = 'white';
            body.style.color = '#121212';
        }
    });
});
