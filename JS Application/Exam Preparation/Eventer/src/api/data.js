import { del, get, post, put } from "./api.js";


export async function getAll(){
    return get('/data/events?sortBy=_createdOn%20desc');
};

export async function getById(id){
    return get('/data/events/' + id);
};

export async function deleteById(id){
    return del('/data/events/' + id);
};

export async function create(eventData){
    return post('/data/events', eventData);
};

export async function edit(eventData, id){
    return await put('/data/events/' + id, eventData);
};

export async function postApplication(id){
    return await post('/data/going', { eventId : id });
};

export async function allCount(eventId){
    return await get(`/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
};

export async function userCount(eventId, userId){
    return await get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}