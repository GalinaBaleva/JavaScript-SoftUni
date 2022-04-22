function loadRepos() {
   const repoUrl="https://api.github.com/users/testnakov/repos";
   let req = new XMLHttpRequest();
   req.onreadystatechange = function()
   {
       if (this.readyState == 4 && this.status == 200)
           document.getElementById("res").textContent =
                   this.responseText;
   };
   req.open("GET",repoUrl,true);
   req.send();
}