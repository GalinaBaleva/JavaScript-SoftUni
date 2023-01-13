import { get } from "../api/api.js";
import { el } from "../util.js";

const section = document.getElementById('dashboard-holder');
section.remove();

let ctx = null;


export async function dashboardView(inCtx) {
    ctx = inCtx;
    section.replaceChildren();

    const data = await get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
    let children = null;

    if (data.lenght <= 0) {
        children = el('h1', [], [], 'No ideas yet! Be the first one :)')
    } else {
        data.map(item => cardCreater(item));
    };

    ctx.render(section);
};

function cardCreater(cardItem) {
    const btn = el('a', ['btn'], [], 'Details');
    btn.addEventListener('click', (event) => {
        ctx.goto('detailsView', event);

    })
    const divCard = el('div', ['card', 'overflow-hidden', 'current-card', 'details'], [['id', cardItem._id]],
        el('div', ['card-body'], [],
            el('p', ['card-text'], [], cardItem.title)
        ),
        el('img', ['card-image'], [['src', cardItem.img], ['alt', 'Card image cap']], ''),
        btn
    );
    section.appendChild(divCard);
};


