function addItem() {
    const newText = document.getElementById("newItemText").value;

    let newLiItem = document.createElement("li");
    newLiItem.textContent = newText;
    
    let deleteLinc = document.createElement("a");
    deleteLinc.href = "#";
    deleteLinc.textContent = `[Delete]`;
    deleteLinc.addEventListener('click', removingItem);
    
    newLiItem.appendChild(deleteLinc);
    document.getElementById("items").appendChild(newLiItem);


    function removingItem(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
        
    }
}