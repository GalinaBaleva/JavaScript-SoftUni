// function attachEvents() {
//                const loadButton = document.getElementById('btnLoadPosts');
//                loadButton.addEventListener('click', onClickLoad);

//                let postSection = document.getElementById('posts');
//                const viewBtn = document.getElementById('btnViewPost');
//                viewBtn.addEventListener('click', onClickView);

//                let postTitleSection = document.getElementById('post-title');
//                let postBody = document.getElementById('post-body');
//                let postCommentsList = document.getElementById('post-comments');
//                const url = `http://localhost:3030/jsonstore/blog/posts/`;
//                const urlComments = `http://localhost:3030/jsonstore/blog/comments/`
               
//                async function onClickLoad(e) {
//                               const dataFromAnswer = await getAnswer(url);
//                               postSection.replaceChildren();

//                               if (dataFromAnswer.message === 'Error') {
//                                              return;
//                               };
//                               Object.values(dataFromAnswer).forEach(post => {
//                                              const postOption = el('option', ['value', post.id], post.title);
//                                              postSection.appendChild(postOption);
//                               });
//                };

//                async function onClickView(e) {
//                               postBody.textContent = 'Loading...';
//                               postCommentsList.replaceChildren();

//                               const [postByID, postComments] = await Promise.all([getAnswer(url + postSection.value), getAnswer(urlComments)]);
//                               postTitleSection.textContent = postByID.title;
//                               postBody.textContent = postByID.body;

//                               let filteredPosts = Object.entries(postComments).filter(x => x[1].postId === postSection.value);
//                               filteredPosts.forEach(comment => {
//                                              const li = el('li', ['id', comment[1].id], comment[1].text);
//                                              postCommentsList.appendChild(li);
//                               });
//                };
// };

// async function getAnswer(url) {
//                try {
//                               const answer = await fetch(url);

//                               if (answer.status != 200) {
//                                              throw new Error(`Error`);
//                               }

//                               const data = await answer.json();

//                               return data;
//                } catch (error) {
//                               return error;
//                }
// }

// function el(tagName, attrName, ...text) {
//                let tag = document.createElement(tagName);

//                if (attrName.length !== 0) {
//                               tag.setAttribute(attrName[0], attrName[1]);
//                };

//                for (let word of text) {
//                               if (typeof (word) === 'string' || typeof (word) === 'number') {
//                                              word = document.createTextNode(word);
//                               };
//                               tag.appendChild(word);
//                };
//                return tag;
// }


function attachEvents() {
    const btnLoad = document.getElementById('btnLoadPosts');
    btnLoad.addEventListener('click', loadingPosts);
    const btnView = document.getElementById('btnViewPost');

    const selectSection = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const commentSection = document.getElementById('post-comments');

    async function loadingPosts() {
        const url = `http://localhost:3030/jsonstore/blog/posts`;
        if (selectSection.children.length != 0) {
            selectSection.replaceChildren()
        }
        const response = await fetch(url);
        const data = await response.json();
        const result = await data;

        Object.entries(result).forEach(element => {
            const tagOption = document.createElement('option');
            tagOption.setAttribute('value', `${element[0]}`);
            tagOption.textContent = element[1].title;

            selectSection.appendChild(tagOption);
        });
        btnView.addEventListener('click', function () { viewList(result) }, false);
    }

    async function viewList(res) {
        postTitle.textContent = 'Loading...';
        postBody.textContent = 'Loading...';
        const comments = `http://localhost:3030/jsonstore/blog/comments/`;
        const value = selectSection.value;
        const findedPost = Object.entries(res).find(el => el[0] == selectSection.value);

        if(commentSection.children.length != 0){
            commentSection.replaceChildren();
        }
        if (value != '') {
            const response = await fetch(comments);
            const data = await response.json();
            const result = Object.entries(data).filter(el => el[1].postId == value);
            result.forEach(elm => {
                const tag = document.createElement('li');
                tag.setAttribute('id', elm[1].postId)
                tag.textContent = elm[1].text;
                commentSection.appendChild(tag);
            })

            postTitle.textContent = findedPost[1].title;
            postBody.textContent = findedPost[1].body;
        }
    };
};

attachEvents();