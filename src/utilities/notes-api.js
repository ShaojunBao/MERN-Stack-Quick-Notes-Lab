import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export async function getNotes(userId) {
    return sendRequest(`${BASE_URL}/${userId}`);
}

export async function createNote(text) {
    return sendRequest(BASE_URL, 'POST', { text });
}