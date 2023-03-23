import { search } from "../api/data.js";
import { html, render, nothing } from "../lib.js";



const searchTemplate = (onSearch) => html`       
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>
    <h2>Results:</h2>

    <div class="search-result"></div>
</section>`;
    

const resultTemplate = (albums, hasUser) => html`    

    ${albums.length == 0 
    ? html`<p class="no-result">No result.</p>` 
    : albums.map(alb => html`
     <div class="card-box">
        <img src=${alb.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${alb.name}</p>
                <p class="artist">Artist: ${alb.artist}</p>
                <p class="genre">Genre: ${alb.genre}</p>
                <p class="price">Price: ${alb.price}</p>
                <p class="date">Release Date: ${alb.releaseData}</p>
            </div>
            ${hasUser 
            ? html`<div class="btn-group">
                <a href="/catalog/${alb._id}" id="details">Details</a>
                </div>`
            : nothing } 
        </div>
    </div>`)}`;

export async function showSearch(ctx){
    ctx.render(searchTemplate(onSearch));
    
    
    async function onSearch(event){ 
        const parent = event.target.parentElement;
        const surchData = parent.querySelector('input').value.trim();
        const root = document.querySelector('.search-result');
        
        if(surchData == ''){
            return alert('The surchfield must be fieled!');
        };
        
        const hasUser = ctx.user;
        const albums = await search(surchData);

        render(resultTemplate(albums, hasUser), root);
    };
};