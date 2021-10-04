function extractText() {
    const itemNodes = document.querySelectorAll("ul#items li");

    let textArea = document.querySelector("#result");

    for(let node of itemNodes){
        textArea.value += node.textContent + "\n";
    }

}