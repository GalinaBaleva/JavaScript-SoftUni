
function getArticleGenerator(articles) {
    console.log(...articles)

    let divArticle = document.getElementById('content');
    function generating() {
            let current = articles.shift();
            if (current !== undefined) {
                let nextArticle = document.createElement('article');
                let paragrafTag = document.createElement('p');
                paragrafTag.textContent = current;
                nextArticle.appendChild(paragrafTag);
                divArticle.appendChild(nextArticle);
            }
    }
    return generating;
}


