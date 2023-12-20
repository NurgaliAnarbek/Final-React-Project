// NoteList.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./NoteList.css";

const formatDayAndHour = (timestamp) => {
  const options = { weekday: "long", hour: "numeric", minute: "numeric" };
  return new Date(timestamp).toLocaleDateString("en-US", options);
};

const NoteList = ({ notes, deleteNote, editNote }) => {
  const handleNoteClick = (index) => {
    editNote(index);
  };

  const handleDeleteClick = (index) => {
    deleteNote(index);
  };

  return (
    <ul className="note-list">
      {notes.map((note, index) => (
        <li key={index} onClick={() => handleNoteClick(index)}>
          <div className="task-name">{note.name}</div>
          <div className="task-text">
            {note.text.split(" ").slice(0, 4).join(" ")}
            {note.text.split(" ").length > 4 ? " ..." : ""}
          </div>
          <div className="note-date">{formatDayAndHour(note.date)}</div>
          <div className="task-actions">
            <FontAwesomeIcon
              icon={faEdit}
              className="icon"
              onClick={(e) => {
                e.stopPropagation();
                editNote(index);
              }}
            />

            <FontAwesomeIcon
              icon={faTrash}
              className="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteClick(index);
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
