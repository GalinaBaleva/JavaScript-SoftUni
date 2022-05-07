async function solution() {
    const urlList = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const respons = await fetch(urlList);
    const data = await respons.json();

    console.log(data)

};

function el(tagName, className, atr, ...text){
    const tag = document.creatElement(tagName);

    if(className != undefined){
        tag.classList = className;
    };

    if(atr != undefined){
        tag.setAttribute(atr[0], atr[1]);
    };

    if(text.length > 0){
        for(let word of text){
            word = document.createTextNode(word);
        };
        tag.appendChild(word);
    };
    return tag;

}
solution();

