async function loadCommits() {
               const userName = document.getElementById('username');
               const repo = document.getElementById('repo');
               const ulList = document.getElementById('commits');

               let url = `https://api.github.com/repos/${userName.value}/${repo.value}/commits`

               try {
                              ulList.replaceChildren();

                              let prommise = await fetch(url);

                              if (prommise.status !== 200) {
                                             throw new Error(prommise.status);
                              }
                              let data = await prommise.json();
                              for (let i = 0; i < data.length; i++) {
                                             const liElement = document.createElement('li');
                                             liElement.textContent = `${data[i].commit.author.name}: ${data[i].commit.message}`;
                                             ulList.appendChild(liElement);
                              }
               } catch (error) {
                              ulList.replaceChildren();
                              const liElement = document.createElement('li');
                              liElement.textContent = `Error: ${error.message} (Not Found)`;
                              ulList.appendChild(liElement);
               }
}




// async function loadCommits() {

//     const userName = document.getElementById('username').value;
//     const userRepo = document.getElementById('repo').value;
//     const url = `https://api.github.com/repos/${userName}/${userRepo}/commits`;

//     let ulList = document.getElementById('commits');

//     try {
//         ulList.replaceChildren();
//         let response = await fetch(url);
//         if(response.status != 200){
//             throw new Error(response.status);
//         }
//         let data = await response.json();

//         data.forEach(element => {
//             let liElement = document.createElement('li');
//             liElement.textContent = `${element.commit.author.name}: ${element.commit.message}`;
//             ulList.appendChild(liElement);
//         });
//     } catch(error){
//         let liElement = document.createElement('li');
//         liElement.textContent = `Error: ${error.message} (Not Found)`;
//         ulList.appendChild(liElement);
//     }
// }