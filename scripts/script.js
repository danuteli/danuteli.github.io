
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

// slide carousel

var carousels = document.querySelectorAll('.slider-carousel');

setTimeout(function(){
    carousels.forEach(carousel => carousel.addEventListener('scroll', slideArticle));
}, 500);


function slideArticle(event) {
    let carousel = event.target;

    let dots = (carousel.parentNode).querySelectorAll('.dot');

    // define the width of the article
    let widthForOneArticle = carousel.clientWidth;
    console.log(widthForOneArticle);
    
    // get the current position from left side in scollWidth
    let currentPosition = carousel.scrollLeft;
    let slideDirection;

    let dotPositions = [];

    for (let i=0; i < dots.length; i++) {
        dotPositions.push(i * widthForOneArticle);
    }

    // remove the previous active class
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active');
            return;
        }
    }

    setTimeout(function () {
        let currentPositionAfter = carousel.scrollLeft;
        
        if (currentPosition < currentPositionAfter) {
            slideDirection = 'right';
        } else if (currentPosition >= currentPositionAfter) {
            slideDirection = 'left';
        }

        if (slideDirection == 'right' || slideDirection == 'left') {
            carousel.removeEventListener('scroll', slideArticle);
            setTimeout(function(){
                carousel.addEventListener('scroll', slideArticle);
               }, 1000);
        }
    }, 100);

    setTimeout(function() {
        console.log(slideDirection);

        
        let index = Math.floor(currentPosition / widthForOneArticle);
        if (slideDirection == 'right') {
            index += 1;
            let slidingPosition = dotPositions[index];
            carousel.scrollLeft = slidingPosition;
            dots[index].classList.add('active');
        } else if (slideDirection = 'left') {
            let slidingPosition = dotPositions[index];
            carousel.scrollLeft = slidingPosition;
            dots[index].classList.add('active');
        };

    }, 120);
}

/*
let culture = document.getElementById('culture');
let nature = document.getElementById('nature');
*/
/*
// check if an element is in viewport
function isInViewport(elem) {
    const rect = elem.getBoundingClientRect();

    var isinview = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
    return isinview; 
}

if (isInViewport(culture)) {
    positionSlider(section);
} else if (isInViewport(nature)) {
    positionSlider(section);
}

function positionSlider(section) {
    let wrrapper = section.querySelector('.slider-wrapper');
    let carousel = section.querySelector('.slider-carousel');
    let position = carousel.scrollLeft;
    
}

function setArticlePosition(elem) {
    let carousel = elem;
    let wrapper = carousel.parentNode;
    console.log(carousel);
    let articles = carousel.querySelectorAll('article');
    let dots = wrapper.querySelectorAll('.dot');

    // get the index of the previous dot and remove the active class
    let prevDotIndex;
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains('active')) {
            dots[i].classList.remove('active');
            prevDotIndex = i;
        }
    }

    // get the width of the carousel
    let carouselWidth  = carousel.clientWidth;

    // get the positon of the previous article
    let positionOfPrevArticle = prevDotIndex * carouselWidth;

    // get the current scroll position
    let positionCurrent = carousel.scrollLeft;

    // define the difference between previous position and the current position
    let difference = positionCurrent - positionOfPrevArticle;

    if (difference > 0) {
        let nextDotIndex = prevDotIndex + 1;
        let positionOfNextArticle = nextDotIndex * carouselWidth;
        carousel.scrollLeft = positionOfNextArticle;
        dots[nextDotIndex].classList.add('active');
    } else if (difference < 0) {
        let nextDotIndex = prevDotIndex - 1;
        let positionOfNextArticle = nextDotIndex * carouselWidth;
        carousel.scrollLeft = positionOfNextArticle;
        dots[nextDotIndex].classList.add('active');
    } else {
        return;
    }
} 
*/

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

