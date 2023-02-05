const host = 'http://localhost:3030';

async function request(method, url, body) {
    try {
        const options = {
            method: method,
            headers: {}
        };

        if(body){
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        };

        const resp = await fetch(host+url, options);

        if(resp.ok != true){
            const error = await resp.json();
            throw new Error(error.message);
        };

        if(resp.status == 204){
            return resp.status;
        };

        const data = resp.json();

        return data;

    } catch (err) {
        alert(err.message);
    }
};

export const get = request.bind(null, 'get');
export const put = request.bind(null, 'put');
export const post = request.bind(null, 'post');
export const del = request.bind(null, 'delete');