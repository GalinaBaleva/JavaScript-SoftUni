import { el } from './util.js';

const detailsView = document.getElementById('detailsView');
detailsView.remove();

export function showDetails(event) {
               let target = event.target;
               if (target.tagName == 'H2') {
                              target = target.parentElement;
               };

               if (target.tagName == 'A') {
                              event.preventDefault();
                              const id = target.dataset.id;
                              showPost(id);
               };
};



async function showPost(id) {
               document.getElementsByTagName('main')[0].replaceChildren(`Loading...`);
               const commentSection = detailsView.querySelector('.comment');

               const [res, resCommenst] = await Promise.all([
                              fetch (`http://localhost:3030/jsonstore/collections/myboard/posts/` + id),
                              fetch (`http://localhost:3030/jsonstore/collections/myboard/comments`)
               ]);

               const [data, dataComments] = await Promise.all([
                               res.json(),
                               resCommenst.json()
               ]);

               console.log(data, dataComments)

               

               document.getElementsByTagName('main')[0].replaceChildren(detailsView);
}
