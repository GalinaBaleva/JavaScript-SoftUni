function attachEvents() {
    const btnLoad = document.getElementById('btnLoadPosts');
    btnLoad.addEventListener('click', loadingPosts);
};
async function loadingPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const response = await fetch(url);
    const data = await response.json();
    const result = await data;
    console.log(result)
    
    const selectSection = document.getElementById('posts');
    Object.values(result).forEach(element => {
        console.log(element.id)
    });
}

function el(tagName, atr, ...text) {
    const tag = document.createElement(tagName);

    if (atr[0] != undefined) {
        tag.setAttribute(atr[0], atr[1]);
    }
    if (text[0] != undefined) {
        for (let word of text) {
            if (word == 'string' || word == 'number') {
                word = document.createTextNode(word);
            };
            tag.appendChild(word);
        };
    };
    return tag;
}
attachEvents();