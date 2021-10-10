function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tbody = Array.from(document.querySelectorAll("tbody tr"));
      let search = document.getElementById("searchField").value;

      tbody.filter(el => el.className = "");

      tbody.filter(el => {
         let children = Array.from(el.children);
            if (children.some(x => x.textContent.includes(search))) {
               el.className = "select";
            };
      });
      document.getElementById("searchField").value = '';
   }
}