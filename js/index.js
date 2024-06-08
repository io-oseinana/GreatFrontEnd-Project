const sectionRigtht = document.querySelector('.right-feature-container');
const btnShow = document.querySelector('#btn-show');

btnShow.addEventListener('click', () => {
    sectionRigtht.classList.toggle('active');

    if (sectionRigtht.classList.contains('active')) {
        btnShow.innerText= 'Click to hide';
    } else {
        btnShow.innerText= 'Show other section';
    }
    });