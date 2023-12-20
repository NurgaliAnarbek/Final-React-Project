import React, { useState, useEffect } from "react";
import "./AddNoteForm.css";

const AddNoteForm = ({ addNote, editIndex, notes }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const { name: existingName, text: existingText } = notes[editIndex];
      setName(existingName);
      setText(existingText);
    }
  }, [editIndex, notes]);

  const handleAddNote = () => {
    if (name.trim() !== "" && text.trim() !== "") {
      addNote({ name, text });
      setName("");
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the name of the note"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Enter the text of the note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddNote}>
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
};

export default AddNoteForm;
