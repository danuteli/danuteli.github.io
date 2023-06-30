// show more




function renderContent(event) {
    let sectionName = event.target.classList[1];
    let article = document.querySelector(`article.${sectionName}`);
    
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


