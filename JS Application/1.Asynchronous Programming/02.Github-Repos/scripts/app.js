function loadRepos() {
               const list = document.querySelector('#repos');
               const userName = document.querySelector('#username').value;
               const url = `https://api.github.com/users/${userName}/repos`
               fetch(url)
                              .then(response => {
                                             if (response.ok == false) {
                                                            throw new Error(`${response.status}${response.statusText}`);
                                             }
                                             return response.json();
                              })
                              .then(handleResponse)
                              .catch(handleError);

               function handleResponse(data) {
                              list.innerHTML = '';

                              for (let repo of data) {
                                             let liElement = document.createElement('li');
                                             let aElement = document.createElement('a');
                                             aElement.setAttribute('href', repo.html_url)
                                             aElement.textContent = `${repo.full_name}`;
                                             liElement.appendChild(aElement);

                                             list.appendChild(liElement);
                              };
               };

               function handleError(err) {
                              list.innerHTML = '';
                              list.textContent = `${err.message}`

               }

}

