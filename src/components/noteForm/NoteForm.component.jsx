import React, { useState } from "react";
import { FiX, FiCheck, FiTrash, FiRotateCcw } from "react-icons/fi";
import IconButton from "../iconButton/IconButton.component";
import Modal from "../modal/Modal.component";
import {
  StyledFormNoteContainer,
  StyledTextarea,
  StyledButtonWrapper,
} from "./NoteForm.styles";

// eslint-disable-next-line react/prop-types
function NoteForm({ id, isArchived, showModal, handleModal }) {
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

  return (
    <Modal title="modal-note" show={showModal} handleClose={handleModal}>
      <StyledFormNoteContainer title="note-form">
        <StyledTextarea
          name="description-note"
          cols="40"
          rows="12"
          placeholder="Write a note ..."
          id={id}
          onChange={(event) => handleChange({ fieldName: "note", event })}
          value={noteData.note}
          title="description-note"
        />
        <StyledButtonWrapper>
          <IconButton
            backgroundColor="transparent"
            border="transparent"
            title="cancel"
          >
            <FiX color="#FF0000" size="20px" />
          </IconButton>
          {isArchived === false ? (
            <IconButton
              backgroundColor="transparent"
              border="transparent"
              title="archive"
            >
              <FiTrash color="#43C16B" size="20px" />
            </IconButton>
          ) : (
            <IconButton
              backgroundColor="transparent"
              border="transparent"
              title="restore"
            >
              <FiRotateCcw color="#9A7722" size="20px" />
            </IconButton>
          )}
          <IconButton
            backgroundColor="transparent"
            border="transparent"
            title="save"
          >
            <FiCheck color="#43C16B" size="20px" />
          </IconButton>
        </StyledButtonWrapper>
      </StyledFormNoteContainer>
    </Modal>
  );
}

export default NoteForm;
