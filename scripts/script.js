
window.addEventListener('load', scroll);

function scroll() {
    let map = document.querySelector('.img');
    map.scrollLeft = (map.scrollWidth - map.clientWidth) / 2;
}