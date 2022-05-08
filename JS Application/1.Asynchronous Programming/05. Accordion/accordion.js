async function solution() {
    const urlList = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const respons = await fetch(urlList);
    const data = await respons.json();

    const divMain = document.getElementById('main');

console.log(data)
    data.forEach(element => {
        const divAccordion = el('div', 'accordion', undefined, 
        el('div', 'head', undefined, el('span', undefined, undefined, el.title),
        el('button')),
        )
    });

};

function el(tagName, className, atr, ...text){
    const tag = document.createElement(tagName);

    if(className != undefined){
        tag.classList = className;
    };

    if(atr != undefined){
        tag.setAttribute(atr[0], atr[1]);
    };

    if(text[0] != undefined){
        for(let word of text){
            word = document.createTextNode(word);
        };
        tag.appendChild(word);
    };
    return tag;

}
solution();

