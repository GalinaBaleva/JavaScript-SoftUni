function loadRepos(){
               const userName = document.getElementById('username');
               let ulList = document.getElementById('repos');
               const url = `https://api.github.com/users/`;

                              fetch(`${url}${userName.value}/repos`)
                              .then(resp => {
                                             if(resp.ok == false){
                                                            throw new Error(`Not Found`)
                                             } 
                                             return resp.json();
                              })
                              .then(handleResponse)
                              .catch(handleError);
               
               function handleResponse(array){
                              ulList.replaceChildren();
                              for(let i = 0; i < array.length; i++){
                                             const liElement = document.createElement('li');
                                             const repo = document.createElement('a');
                                             repo.setAttribute('href', array[i].html_url)
                                             repo.textContent = array[i].full_name;
                                             liElement.appendChild(repo);
                                             ulList.appendChild(liElement);
                              }


               }

               function handleError(error){
                              ulList.replaceChildren();
                              const liElement = document.createElement('li');
                              liElement.textContent = error;
                              ulList.appendChild(liElement);

               }


}




// function loadRepos() {
//                const list = document.querySelector('#repos');
//                const userName = document.querySelector('#username').value;
//                const url = `https://api.github.com/users/${userName}/repos`
//                fetch(url)
//                               .then(response => {
//                                              if (response.ok == false) {
//                                                             throw new Error(`${response.status}${response.statusText}`);
//                                              }
//                                              return response.json();
//                               })
//                               .then(handleResponse)
//                               .catch(handleError);

//                function handleResponse(data) {
//                               list.innerHTML = '';

//                               for (let repo of data) {
//                                              let liElement = document.createElement('li');
//                                              let aElement = document.createElement('a');
//                                              aElement.setAttribute('href', repo.html_url)
//                                              aElement.textContent = `${repo.full_name}`;
//                                              liElement.appendChild(aElement);

//                                              list.appendChild(liElement);
//                               };
//                };

//                function handleError(err) {
//                               list.innerHTML = '';
//                               list.textContent = `${err.message}`

//                }

// }

