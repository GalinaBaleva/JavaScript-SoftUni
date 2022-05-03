async function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;

    let result = await fetch(url);
    if(result.status != 200){
        throw new Error(`Error`);
    }
    let result2 = await result.json();
    Object.entries(result2).forEach(el => console.log(el))
}