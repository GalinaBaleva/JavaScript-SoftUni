import { search } from "../api/data.js";
import { html, nothing } from "../lib.js";

const searchTemplate = (onSearch) => html`       
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>`;

const resultTemplate = (albums, hasUser) => html`    
<h2>Results:</h2>

<!--Show after click Search button-->
<div class="search-result">
    ${hasUser}
    <div class="card-box">
        <img src="./images/BrandiCarlile.png">
        <div>
            <div class="text-center">
                <p class="name">Name: In These Silent Days</p>
                <p class="artist">Artist: Brandi Carlile</p>
                <p class="genre">Genre: Low Country Sound Music</p>
                <p class="price">Price: $12.80</p>
                <p class="date">Release Date: October 1, 2021</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>

    <!--If there are no matches-->
    <p class="no-result">No result.</p>
</div>
</section>`;

export async function showSearch(ctx){
    ctx.render(searchTemplate(onSearch));
    
    
    async function onSearch(event){ 
        const parent = event.target.parentElement;
        const surchData = parent.querySelector('input');
        
        if(surchData.value == ''){
            return alert('The surchfield must be fieled!');
        };
        
        const hasUser = ctx.user;
        const albums = await search(surchData.value);

        ctx.render(resultTemplate(albums, hasUser))
    };
};