import { edit, getById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (job, onEdit) => html`
`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const job = await getById(id);

    ctx.render(editTemplate(job, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        const dataValues = [...Object.values(data)].some(d => d.trim() == '');

        if (dataValues) {
            return alert('All fields are required!');
        };

        const result = [...Object.entries(data)].reduce((acc, curent) => Object.assign(acc, { [curent[0]]: curent[1] }), {});

        await edit(result, id);

        ctx.page.redirect('/details/' + id);
    };
};