import { getHomePage } from "../api/data.js";
import { html } from "../lib.js";

const homeTemplate = (newGames) => html`
        <section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>

    ${newGames.length == 0 ? html`<p class="no-articles">No games yet</p>`
    : newGames.map(g => html`
        <div class="game">
        <div class="image-wrap">
            <img src="${g.imageUrl}">
        </div>
        <h3>${g.title}</h3>
        <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/details/${g._id}" class="btn details-btn">Details</a>
        </div>
    </div>`)} 
</div>
</section>`;

export async function showHome(ctx) {
    const newGames = await getHomePage();
    console.log(newGames)
    ctx.render(homeTemplate(newGames));
}