import React, { useState } from "react";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredNotes = notes.filter((note) =>
    note.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNote = (newNote) => {
    const currentDate = new Date();
    newNote.date = currentDate.getTime();
    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = newNote;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setEditIndex(null);
  };

  const editNote = (index) => {
    setEditIndex(index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </div>

      <h1>Nur-Note</h1>

      <div className="searchDiv">
        <input
          type="text"
          placeholder="Search by note name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <AddNoteForm addNote={addNote} editIndex={editIndex} notes={notes} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
};

export default App;
