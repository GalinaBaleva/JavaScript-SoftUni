import { get, del } from "../api/api.js";
import { el } from "../util.js";

const section = document.getElementById('detailsView');
section.remove();

let ctx = null;

export async function detailsView(inCtx) {
    ctx = inCtx;
    const id = ctx.options[0];

    const user = sessionStorage.getItem('userId');
    let me = undefined;

    if (user) {
        me = await get('/users/me');

    }
    const data = await get('/data/ideas/' + id);

    section.replaceChildren();

    const divCard = createDetailsCard(data);

    if (me) {
        if (me._id === data._ownerId) {
            const deleteSection = el('div', ['text-center'], [['id', data._id]],
                el('a', ['btn', 'detb'], [['href', ""]], 'Delete')
            );
            deleteSection.addEventListener('click', onDelete);
            section.appendChild(deleteSection);
        }
    }

    const btn = section.querySelector('div a');

    if (btn) {
        console.log(btn)
    }

    //1) non-author does NOT see delete button
    //2) author sees delete button


    ctx.render(section);

}

function createDetailsCard(data) {
    const img = el('img', ['det-img'], [['src', data.img]], '');
    const div = el('div', ['desc'], [],
        el('h2', ['display-5'], [], data.title),
        el('p', ['infoType'], [], 'Description:'),
        el('p', ['idea-description'], [], data.description)
    );
    section.appendChild(img);
    section.appendChild(div);
}

async function onDelete(event) {
    event.preventDefault();
    const id = event.target.parentElement.id;

    del('/data/ideas/' + id);

    ctx.goto('dashboard-link');
}