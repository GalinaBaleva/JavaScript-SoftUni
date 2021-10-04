function extractText() {
    const itemNodes = document.querySelectorAll("ul#items li");

    // let textArea = document.querySelector("#result");

    // for(let node of itemNodes){
    //     textArea.value += node.textContent + "\n";
    // }

    const items = document.getElementById('items').children;

    const result = [];

    for(let li of items){
        result.push(li.textContent);
    }

    document.getElementById('result').textContent = result.join('\n');

}