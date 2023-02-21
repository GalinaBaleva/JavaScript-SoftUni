const host = 'http://localhost:3030';

export async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const token = sessionStorage.getItem('accessToken');

    if (token && options.method !== 'get') {
        options.headers['X-Authorization'] = token;
    };

    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        };
        const data = await response.json();

        if (response.ok == false) {
            throw new Error(data.message);
        };

        return data;

    } catch (err) {
        alert(err.message);
        throw err;
    };
};

export const get = requester.bind(null, 'get');
export const post = requester.bind(null, 'post');
export const put = requester.bind(null, 'put');
export const del = requester.bind(null, 'delete');



