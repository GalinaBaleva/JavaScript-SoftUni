function sumTable() {
               const children = document.querySelectorAll("table tr");

               let sum = 0
               
               for(let i = 1; i < children.length - 1; i++){
                              let child = children[i];
                              let price = child.lastElementChild.textContent
                              // let price = child[child.length - 1].textContent;
                              sum += Number(price);
                              
               }
               document.getElementById('sum').textContent = sum;
}