const arrow = document.getElementById('arrow');
const header = document.querySelector('header'); 

function toggleArrow() {
    if (window.scrollY > header.offsetHeight) {
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
}


window.addEventListener('load', toggleArrow);
window.addEventListener('scroll', toggleArrow);


arrow.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
