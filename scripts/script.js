
// on loading - map scroll in the middle
window.addEventListener('load', scroll);

function scroll() {
    let map = document.querySelector('.map');
    map.scrollLeft = (map.scrollWidth - map.clientWidth) / 2;
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
        btnOpenNav.innerHTML = '&#9783;';
        btnOpenNav.style.color = 'rgb(239, 210, 199)';
        return;
    } 
    btnOpenNav.innerHTML = '&#9776;';
    btnOpenNav.style.color = 'rgb(44, 76, 73)';
}


// map
const points = document.querySelectorAll('.cul');

points.forEach(point => point.addEventListener('click', articlePopUp));

function articlePopUp(event) {
    
    
    if (event.target.classList[0] == 'cul') {
        const article = document.getElementsByClassName(event.target.classList[1]);
        if (!document.getElementById('article-popup')) {
            const copyArticle = article[1].cloneNode(true);
            copyArticle.setAttribute('id', 'article-popup')
            document.body.appendChild(copyArticle);
            return;
    
        } else {
            document.getElementById('article-popup').remove();
        }
    }

    if (event.target.classList[0] == 'btn-close-popup') {
        document.getElementById('article-popup').remove();
    }
    
    
    

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
    let showedArticles = Math.floor(carousel / article)
    if (showedArticles == 0) {
        showedArticles = 1;
    }
    return (article + 30) * showedArticles;
}
