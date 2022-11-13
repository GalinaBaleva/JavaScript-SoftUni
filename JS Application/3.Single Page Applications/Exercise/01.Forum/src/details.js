import { el } from './util.js';

const detailsView = document.getElementById('detailsView');
detailsView.remove();

export function showDetails(event) {
               let target = event.target;
               if (target.tagName == 'H2') {
                              target = target.parentElement;
               };

               if (target.tagName == 'A') {
                              console.log(`a is cliked`);
                              event.preventDefault();
                              showPost();
               };
};

function showPost(id) {
               document.getElementsByTagName('main')[0].replaceChildren(detailsView);
}