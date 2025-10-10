javascript
let sections = document.querySelectorAll('.section');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section, index) => {
        if (scrollTop > lastScrollTop) {
            section.style.transform = `translateY(-${scrollTop * 0.5}px)`;
        } else {
            section.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // for Mobile or negative scrolling
});