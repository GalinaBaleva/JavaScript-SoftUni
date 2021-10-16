// function deleteByEmail() {
//     const writedText = document.querySelector('input[name="email"]').value;
//     let rows = Array.from(document.querySelector('tbody').children);

//     let flag = false;

//     for(let row of rows){
//         if(writedText === row.children[1].textContent){
//             row.remove();
//             flag = true;
//         }
//     }
//     document.getElementById('result').textContent = flag === true ? `Deleted.` : `Not found.`;
// }
function deleteByEmail() {
    const text = document.querySelector('input[name="email"]').value;
    let rows = Array.from(document.querySelector("tbody").children).filter(r => r.children[1].textContent === text);
    rows.forEach(row => row.remove());

    document.getElementById('result').textContent = rows.letngth > 0 ? `Deleted.` : `Not found.`
}
