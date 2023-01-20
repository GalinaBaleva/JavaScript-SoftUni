import { render } from 'https://unpkg.com/lit-html?module';
import { table } from './table.js';

const data = [
{
    name: 'Peter',
    id: 'asd1',
    canEdit: false,
    style: {
        color: 'red',
        border: '1px solid black'
    }
},
{
    name: 'Mary',
    id: 'asd2',
    canEdit: true,
    style: {
        color: 'red',
        border: '1px solid black'
    }
},
{
    name: 'John',
    id: 'asd3',
    canEdit: false,
    style: {
        color: 'red',
        border: '1px solid black'
    }
}];

const root = document.querySelector('main');

updata();

function onClick(id){
    const item = data.findIndex(i => i.id == id);
    data.splice(item, 1);
    updata();
};

function updata(){
    render(table(data, onClick), root);
}