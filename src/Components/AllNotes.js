import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, updateNote } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import "./AllNotes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateNoteId, setUpdateNoteId] = useState(null);
  const [updateNoteTitle, setUpdateNoteTitle] = useState("");
  const [updateNoteContent, setUpdateNoteContent] = useState("");

  const handleUpdateNote = () => {
    dispatch(updateNote(updateNoteId, updateNoteTitle, updateNoteContent));
    setUpdateNoteId(null);
    setUpdateNoteTitle("");
    setUpdateNoteContent("");
  };

  return (
    <>
      <button className="button-29" role="button" onClick={() => navigate("/")}>
        Home
      </button>
      <div className="container">
        {notes.map((note, index) => {
          return (
            <>
              {updateNoteId === note.id ? (
                <div
                  className="card"
                  style={{ width: "18rem", margin: "2rem" }}
                >
                  <div className="card-body">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Title"
                      value={updateNoteTitle}
                      onChange={(e) => setUpdateNoteTitle(e.target.value)}
                    />
                    <textarea
                      className="form-control mb-2"
                      rows="3"
                      placeholder="Content"
                      value={updateNoteContent}
                      onChange={(e) => setUpdateNoteContent(e.target.value)}
                    ></textarea>
                    <button
                      className="btn btn-success mb-2 mr-2"
                      onClick={() => handleUpdateNote()}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary mb-2"
                      onClick={() => setUpdateNoteId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="card"
                  style={{ width: "18rem", margin: "2rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    <button
                      className="btn"
                      onClick={() => {
                        setUpdateNoteId(note.id);
                        setUpdateNoteTitle(note.title);
                        setUpdateNoteContent(note.content);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} className="edit-btn" />
                    </button>

                    <button
                      className="btn"
                      onClick={() => dispatch(removeNote(index))}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="delete-btn"
                      />
                    </button>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
