import React from "react";

function NoteCard({ note, index, deleteNote }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <p>{note}</p>
      <button
        onClick={() => deleteNote(index)}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;
