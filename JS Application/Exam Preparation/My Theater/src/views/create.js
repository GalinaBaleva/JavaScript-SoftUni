import { create } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(data, form) {
        const some = [...Object.values(data)].some(d => d == '');

        if (some) {
            return alert('All fields are required!');
        };

        const result = [...Object.entries(data)].reduce((acc, curent) => Object.assign(acc, { [curent[0]]: curent[1] }), {});

        await create(result);
        form.reset();
        ctx.page.redirect('/catalog');

    };
};