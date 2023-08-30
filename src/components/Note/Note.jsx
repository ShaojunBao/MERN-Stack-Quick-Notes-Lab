import React, { useState, useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as notesService from '../../utilities/notes-service';

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    async function fetchNotes() {
      try {
        const user = userService.getUser();
        if (user) {
          const fetchedNotes = await notesService.getNotesForUser(user._id);
          setNotes(Array.isArray(fetchedNotes) ? fetchedNotes : []);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
        setNotes([]);  
      }
    }

    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    try {
      const addedNote = await notesService.addNote(newNote);
      setNotes([...notes, addedNote]);
      setNewNote('');
    } catch (error) {
      console.error("Error adding note:", error);
      // Handle or notify the user about the error, if needed
    }
  };

  return (
    <div>
      <textarea 
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Enter your note..."
      />
      <button onClick={handleAddNote}>Add Note</button>

      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map(note => (
            <li key={note._id}>
              <p>{note.text}</p>
              <p>{new Date(note.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesPage;