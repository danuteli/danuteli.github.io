
// on loading - map scroll in the middle
// on loading - first section dot has class 'active'
window.addEventListener('load', defaultScrollMap);
window.addEventListener('load', defaultScrollSection);

function defaultScrollMap() {
    let map = document.querySelector('.map');
    map.scrollLeft = (map.scrollWidth - map.clientWidth) / 2;
}

function defaultScrollSection() {
    let sliderNav = document.querySelectorAll('.slider-nav');
    for (let i = 0; i < sliderNav.length; i++) {
        sliderNav[i].children[0].classList.add('active');
    }
}


// mobile navigation
const nav = document.getElementById('nav');
const btnOpenNav = document.getElementById('navOpen');
const links = document.querySelectorAll('.link');

btnOpenNav.addEventListener('click', toggleNav);
links.forEach(link => link.addEventListener('click', toggleNav));


function toggleNav() {
    nav.classList.toggle('open');
    if(nav.classList.contains('open')) {
        btnOpenNav.innerHTML = '&#9866;';
        btnOpenNav.style.color = 'rgb(239, 210, 199)';
        return;
    } 
    btnOpenNav.innerHTML = '&#9776;';
    btnOpenNav.style.color = 'rgb(44, 76, 73)';
}


// map
const points = document.querySelectorAll('.point');

points.forEach(point => point.addEventListener('click', articlePopUp));

function articlePopUp(event) {
    
    
    if (event.target.classList[0] == 'point') {
        const article = document.getElementsByClassName(event.target.classList[1]);
        if (!document.getElementById('article-popup')) {
            const copyArticle = article[1].cloneNode(true);
            copyArticle.setAttribute('id', 'article-popup')
            document.body.appendChild(copyArticle);
            const btn = copyArticle.querySelector('.showMore');
            btn.addEventListener('click', toggleShowMore);
            return;
    
        } else {
            document.getElementById('article-popup').remove();
        }
    }

    if (event.target.classList[0] == 'btn-close-popup') {
        document.getElementById('article-popup').remove();
    }
}

// if carousel on scroll - change active class for the dot

var carousels = document.querySelectorAll('.slider-carousel');

carousels.forEach(carousel => carousel.addEventListener('scroll', changeActiveDot));

function changeActiveDot(event) {
    let carousel = event.target;
    let dots = carousel.parentNode.querySelectorAll('.dot');

    let currentPosition = carousel.scrollLeft;
    let widthForOneArticle = Math.floor(carousel.scrollWidth / dots.length) - 1;

    let dotPositions = getDotPositions(dots, widthForOneArticle);

    for (let i=0; i < dots.length; i++) {
        if ((currentPosition >= dotPositions[i] && currentPosition < dotPositions[i+1]) || currentPosition >= dotPositions[i]) {
            removePreviousActive(dots);
            dots[i].classList.add('active');
        } 
    }
}

function removePreviousActive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains('active')) {
            arr[i].classList.remove('active');
            return;
        }
    }
}

function getDotPositions(dots, articleWidth) {
    let dotPositions = [];

    for (let i=0; i < dots.length; i++) {
        dotPositions.push(i * articleWidth);
    }

    return dotPositions;
}


// click on dots
var dots = document.querySelectorAll('.dot');
dots.forEach(dot => dot.addEventListener('click', slideArticleOnClick));

function slideArticleOnClick(event) {
    let section = document.getElementById(event.target.parentNode.classList[1]);
    let carousel = section.querySelector('.slider-carousel');
    let dots = section.querySelectorAll('.dot');
    let dotPositions = getDotPositions(dots, carousel.clientWidth);
    let dot = event.target;
    let dotIndex = Array.prototype.indexOf.call(dot.parentNode.children, dot);

    carousel.scrollLeft = dotPositions[dotIndex];
}

/*
// show more article funciton

const showMorebtns = document.querySelectorAll('.showMore');

showMorebtns.forEach(btn => btn.addEventListener('click', toggleShowMore));


function toggleShowMore(e) {
    const article = e.target.parentNode;

    if (!document.getElementById('expandedArticle')) {
        let expandedArticle = article.cloneNode(true);
        expandedArticle.setAttribute('id', 'expandedArticle');
        document.body.appendChild(expandedArticle);
        return;
    }
    document.getElementById('expandedArticle').remove();
    document.body.style.background = 'white';
}


window.onclick = function (event) {
    if (document.getElementById('expandedArticle')) {
        let article = document.getElementById('expandedArticle');
        if (!event.target.matches('.showMore') && !article.contains(event.target)) {
            article.remove();   
        }
    } else if (document.getElementById('article-popup')) {
        let article = document.getElementById('article-popup');
        if (!event.target.classList.contains('point') && !article.contains(event.target)) {
            article.remove();   
        }
    }
}
*/

