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
        const comments = `http://localhost:3030/jsonstore/blog/comments/`;
        const value = selectSection.value;
        const findedPost = Object.entries(res).find(el => el[0] == selectSection.value);

        if (value != '') {
            const response = await fetch(comments);
            const data = await response.json();
            const result = Object.entries(data).filter(el => el[1].postId == value);
            result.forEach(elm => console.log(elm));
            result.forEach(elm => {
                const tag = el('li', ['id', elm[1].postId], elm[1].text);
                commentSection.appendChild(tag);
            })
           
            postTitle.textContent = findedPost[1].title;
            postBody.textContent = findedPost[1].body;
        }

    };

    function el(tagName, atr, ...text) {
        const tag = document.createElement(tagName);

        if (atr[0] != undefined) {
            tag.setAttribute(atr[0], atr[1]);
        }
        if (text[0] != undefined) {
            for (let word of text) {
                if (word == 'string' || word == 'number') {
                    word = document.createTextNode(word);
                };
                tag.appendChild(word)
            };
        };

        return tag;
    }
};

attachEvents();