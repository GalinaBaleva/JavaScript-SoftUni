window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.querySelectorAll('#newPost form input'));
  let textArea = document.querySelector('#post-content')

  const pushButton = document.querySelector('#publish-btn');
  pushButton.addEventListener('click', toMiddleContainer);

  let reviewList = document.querySelector('#review-list');
  let publ = document.querySelector('#published-list');
  let clear = document.querySelector('#clear-btn')
  clear.addEventListener('click', deleteB)

  function toMiddleContainer(e) {
    e.preventDefault()
    let [postTitle, postCategory] = inputFields.map(input => input.value.trim());
    let content = textArea.value.trim();

    if (postTitle == '' || postCategory == '' || content == '') {
      return;
    };
    let li = el('li', {},
      el('article', {},
        el('h4', {}, `${postTitle}`),
        el('p', {}, `Category: ${postCategory}`),
        el('p', {}, `Content: ${content}`)))
    let buttonEdit = document.createElement('button');
    buttonEdit.classList = 'action-btn edit';
    buttonEdit.textContent = 'Edit';
    buttonEdit.addEventListener('click', edit)
    let buttonApprove = document.createElement('button');
    buttonApprove.classList = 'action-btn approve';
    buttonApprove.textContent = 'Approve';
    buttonApprove.addEventListener('click', approve);
    li.classList = 'rpost';
    li.appendChild(buttonEdit);
    li.appendChild(buttonApprove);
    reviewList.appendChild(li);

    inputFields.map(el => el.value = '');
    textArea.value = '';
  }
  function edit(e) {
    let parent = e.target.parentElement;
    let post = parent.children;
    let children = post[0].children;
    let postTitle = children[0].textContent
    let postCategory = children[1].textContent
    let content = children[2].textContent
    postCategory = postCategory.split(' ').splice(1).join(' ');
    content = content.split(' ').splice(1).join(' ');

    inputFields[0].value = postTitle;
    inputFields[1].value = postCategory;
    textArea.value = content;

    parent.remove()

  }
  function approve(e) {
    let parent = e.target.parentElement;
    console.log(parent)
    let post = parent.children;
    let children = post[0];

    publ.appendChild(children);
    parent.remove()

  }
  function deleteB(e) {
    let parent = e.target.parentNode;
    let parent2 = parent.children[1];
    let parentToRemove = parent2.children[0]
    parentToRemove.remove()

  }

  function el(type, atr, ...text) {
    let element = document.createElement(type);

    for (let atribut in atr) {
      element[atribut] = atr[atribut];
    };

    for (let word of text) {
      if (typeof word === 'string' || typeof word === 'number') {
        word = document.createTextNode(word);
      }
      element.appendChild(word);
    }
    return element;
  }

}
