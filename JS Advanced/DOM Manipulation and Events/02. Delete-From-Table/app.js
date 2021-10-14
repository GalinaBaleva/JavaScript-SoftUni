function deleteByEmail() {
    const writedText = document.querySelector('input[name="email"]').value;
    let rows = Array.from(document.querySelector('tbody').children);

    let flag = false;
    
    for(let row of rows){
        if(writedText === row.children[1].textContent){
            row.remove();
            flag = true;
        }
    }
    document.getElementById('result').textContent = flag === true ? `Deleted.` : `Not found.`;
}