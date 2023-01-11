import { createSubmitHandler } from "../util.js";
import { post } from "../api/api.js";

createSubmitHandler('createView', onCreate);

const section = document.getElementById('createView');
section.remove();


export function createView(ctx){
    ctx.checkUserNav();
    ctx.render(section);
}

async function onCreate(data, event){
    if(data.title < 6){
        alert(`The title should be at last 6 characters long!`);
        return;
    };

    if(data.description.length < 10){
        alert(`The description should be at last 10 characters long!`);
        return;
    };

    if(data.imageURL.length < 5){
        alert(`The image should be at last 5 characters long!`);
        return;
    };

    const response = post('/data/ideas', data);

}