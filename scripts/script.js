

// on loading - map scroll in the middle
window.addEventListener('load', scroll);

function scroll() {
    let map = document.querySelector('.img');
    map.scrollLeft = (map.scrollWidth - map.clientWidth) / 2;
}


// section - .slider buttons
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const carousel = document.querySelector('.carousel');
const article = document.querySelector('article');

['click', 'mouseover'].forEach(e => btnLeft.addEventListener(e, toTheLeft));
['click', 'mouseover'].forEach(e => btnRight.addEventListener(e, toTheRight));

function toTheLeft() {
    const carouselWidth = carousel.clientWidth;
    const articleWidth = article.clientWidth;
    carousel.scrollLeft -= slideWidth(carouselWidth, articleWidth);
}


function toTheRight() {
    const carouselWidth = carousel.clientWidth;
    const articleWidth = article.clientWidth;
    carousel.scrollLeft += slideWidth(carouselWidth, articleWidth)
}

function slideWidth(carousel, article) {
    return (article + 30) * Math.floor(carousel / article);
}
