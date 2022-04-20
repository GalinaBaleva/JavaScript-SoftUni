function loadRepos() {
   // let url = "https://api.github.com/users/testnakov/repos";
   // const httpsRequest = new XMLHttpRequest();
   // httpsRequest.addEventListener('readystatechenge', function (){
   //    if(httpsRequest.readyState == 4 && httpsRequest.status == 200){
   //       document.getElementById('res').textContent = httpsRequest.responseText;
   //    };
   //});

   
   // httpsRequest.open('GET', url);
   // httpsRequest.send();
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