function addItem() {
    const newText = document.getElementById("newItemText");

    let newLiElement = document.createElement('li');
    newLiElement.textContent = newText.value;

    let button = document.createElement('a');
    button.href = "#";
    button.textContent = `[Delete]`;
    button.addEventListener("click", removingItem);
    newLiElement.appendChild(button);

    document.getElementById('items').appendChild(newLiElement);

    newText.value = "";

    function removingItem(ev){
        let parent = ev.target.parentNode;
        parent.remove();
    }

}