function search() {
   let list = Array.from(document.getElementById("towns").children);
   let searchText = document.getElementById("searchText").value;
   let counter = 0;
   

   for (let i = 0; i < list.length; i++) { 
      if(list[i].textContent.includes(searchText)){
         counter++;
         list[i].style.fontWeight = "bold";
         list[i].style.textDecoration = "underline";
      } else {
         list[i].style.fontWeight = "normal"
         list[i].style.textDecoration = ""
      }
   };
   let result = document.getElementById("result");
   result.innerHTML = `${counter} matches found`
}
