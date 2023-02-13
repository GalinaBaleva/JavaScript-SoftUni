const host = 'http://localhost:3030';

async function requester(method, url, data){

    const options = {
        method,
        headers: {}
    };

    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const token = sessionStorage.getItem('accessToken');

    if(token){
        options.headers['X-Autorisation'] = token.accessToken; // not sure
    };


    try{
        const resp = await fetch(host + url, options);

        if(resp.status == 204){
            return resp;
        };

        const data = await resp.json();

        if(data.ok == false){
            throw new Error(data.message);
        };

        return data;

    } catch (err){
        alert(err.message);
        return err;
    };
};


export const get = requester.bind(null, 'get');
export const post = requester.bind(null, 'post');
export const put = requester.bind(null, 'put');
export const del = requester.bind(null, 'del');