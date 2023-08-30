import * as noteAPI from './notes-api';

export async function getNotesForUser(userId) {
    try {
        return await noteAPI.getNotes(userId);
    } catch (error) {
        console.error("Failed to fetch notes:", error);
        throw error;
    }
}

export async function addNote(text) {
    try {
        return await noteAPI.createNote(text);
    } catch (error) {
        console.error("Failed to add note:", error);
        throw error;
    }
}