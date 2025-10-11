import React from "react";
import NoteCard from "./NoteCard";

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes yet...</p>
      ) : (
        notes.map((note, index) => (
          <NoteCard key={index} note={note} index={index} deleteNote={deleteNote} />
        ))
      )}
    </div>
  );
}

export default NoteList;
