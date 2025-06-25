// Highlight active nav link on scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
        let scrollPos = window.scrollY || window.pageYOffset;
        sections.forEach((section, idx) => {
            if (
                section.offsetTop - 100 <= scrollPos &&
                section.offsetTop + section.offsetHeight - 100 > scrollPos
            ) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[idx].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});