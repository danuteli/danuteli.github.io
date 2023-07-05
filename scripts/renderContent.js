// show more


let images = document.querySelectorAll('.article-img');
let titles = document.querySelectorAll('.article-text h2');
images.forEach(image => image.addEventListener('click', renderContent));
titles.forEach(title => title.addEventListener('click', renderContent));


function renderContent(event) {
    let article;
    if (event.target.classList[0] == 'showMore') {
        let sectionName = event.target.classList[1];
        article = document.querySelector(`article.${sectionName}`);
    } else if (((event.target.parentNode).parentNode.getAttribute('id') == 'article-popup')) {
        article = document.querySelector(`article.${(event.target.parentNode).parentNode.classList[0]}`);
    } else if (((event.target.parentNode).getAttribute('id') == 'article-popup')) {
        article = document.querySelector(`article.${(event.target.parentNode).classList[0]}`);
    } else {
        article = (event.target.parentNode).parentNode;
    }
    
    let articleContent = {
        imgSrc: `${article.querySelector('img').getAttribute('src')}`,
        title: `${article.querySelector('h2').innerHTML}`,
        description: `${article.querySelector('.description').innerHTML}`
    } 

    localStorage.setItem('data', JSON.stringify(articleContent));

    window.location.href = 'template.html';
}


function getContent(clone) {
    let content = localStorage.getItem('data');
    const obj = JSON.parse(content);
    let templateContent = document.getElementById('content');
    templateContent.querySelector('img').setAttribute('src', `${obj.imgSrc}`)
    templateContent.querySelector('h2').innerHTML = obj.title;
    templateContent.querySelector('p').innerHTML = obj.description;
}


function goBack() {
    window.history.go(-1);
}


