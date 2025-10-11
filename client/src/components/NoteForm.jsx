import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() === "") return;
    addNote(note);
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ padding: "10px", width: "70%" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default NoteForm;
