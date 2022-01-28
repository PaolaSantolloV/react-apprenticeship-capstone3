import React, { useState } from "react";
import IconButton from "../iconButton/IconButton.component";
import Input from "../input/Input.component";
import Modal from "../modal/Modal.component";

// eslint-disable-next-line react/prop-types
function NoteCard({ title, id, isArchived }) {
  const [showModal, setShowModal] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    note: "",
    status: true,
  });

  const handleChange = ({ fieldName, event }) => {
    setNoteData({
      ...noteData,
      [fieldName]: event.currentTarget.value,
    });
  };

  const handleModal = () => setShowModal(false);

  return (
    <Modal title="modal-note" show={showModal} handleClose={handleModal}>
      <div title={title}>
        <Input
          placeholder="Title"
          id={id}
          type="text"
          onChange={(event) => handleChange({ fieldName: "title", event })}
          value={noteData.title}
          title="title-note"
        />
        <textarea
          name="description-note"
          cols="40"
          rows="5"
          placeholder="..."
          id={id}
          onChange={(event) => handleChange({ fieldName: "note", event })}
          value={noteData.note}
          title="description-note"
        />
        <IconButton title="cancel">
          <h1>cancel</h1>
        </IconButton>
        {isArchived === false ? (
          <IconButton title="archive">
            <h1>archived</h1>
          </IconButton>
        ) : (
          <IconButton title="restore">
            <h1>restore</h1>
          </IconButton>
        )}
        <IconButton title="save">
          <h1>save</h1>
        </IconButton>
      </div>
    </Modal>
  );
}

export default NoteCard;
