
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Odpiranje in zapiranje mobilnega menija
menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');

    menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Zapri meni' : 'Odpri meni'
    );

    menuButton.textContent = isOpen ? '✕' : '☰';
});

// Zapri meni po izbiri povezave
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Odpri meni');
        menuButton.textContent = '☰';
    });
});

// Samodejno leto v nogi strani
document.querySelector('#year').textContent =
    new Date().getFullYear();
