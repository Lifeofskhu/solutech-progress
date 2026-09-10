// SOLUTECH CONSULTING — NAVIGATION SCRIPT

function showPage(pageId, event) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    if (event) {
        event.target.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}