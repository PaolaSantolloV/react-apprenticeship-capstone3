import React, { useState } from "react";
import { FiX, FiCheck, FiTrash, FiRotateCcw } from "react-icons/fi";
import { BiColorFill } from "react-icons/bi";
import { HuePicker } from "react-color";
import IconButton from "../iconButton/IconButton.component";
import Modal from "../modal/Modal.component";
import {
  StyledFormNoteContainer,
  StyledTextarea,
  StyledButtonWrapper,
  StyledColorWrapper,
  StyledLabelError,
} from "./NoteForm.styles";
import { useAddNote } from "../../hooks/useAddNote";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

// eslint-disable-next-line react/prop-types
function NoteForm({ id, isArchived, showModal, handleModal, isForm }) {
  const { loading } = useGlobalContext();
  const { userData } = useAuthContext();
  const [showSelectColor, setShowSelectColor] = useState(false);
  const [isError, setIsError] = useState(false);

  const [colorSelected, setColorSelected] = useState({
    background: "#fff",
  });

  const [noteData, setNoteData] = useState({
    note: "",
    color: "#fff",
    status: true,
    idUser: userData.user.uid,
  });

  const handleChange = ({ fieldName, event }) => {
    setNoteData({
      ...noteData,
      [fieldName]: event.currentTarget.value,
    });
  };

  const handleShowSelectColor = () => setShowSelectColor(true);

  const handleSelectColor = (color) => {
    setColorSelected({ background: color.hex });
    setNoteData({
      ...noteData,
      color: color.hex,
    });
    setShowSelectColor(false);
  };

  const add = async () => {
    useAddNote(noteData)
      .then(() => {
        loading(true);
        handleModal();
        loading(false);
      })
      .catch(() => {
        setIsError(true);
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
        {showSelectColor && (
          <StyledColorWrapper>
            <HuePicker
              color={colorSelected.background}
              onChangeComplete={handleSelectColor}
            />
          </StyledColorWrapper>
        )}
        {isError === true && (
          <StyledColorWrapper>
            <StyledLabelError title="error-label">
              * An error occurred please try again.
            </StyledLabelError>
          </StyledColorWrapper>
        )}
        <StyledButtonWrapper>
          <IconButton title="color" onClick={handleShowSelectColor}>
            <BiColorFill color="#000000" size="20px" />
          </IconButton>
          <IconButton title="cancel" onClick={handleModal}>
            <FiX color="#FF0000" size="20px" />
          </IconButton>
          {isForm === false &&
            (isArchived === true ? (
              <IconButton title="archive">
                <FiRotateCcw color="#9A7722" size="18px" />
              </IconButton>
            ) : (
              <IconButton title="restore">
                <FiTrash color="#9A7722" size="18px" />
              </IconButton>
            ))}

          <IconButton title="save" onClick={add}>
            <FiCheck color="#43C16B" size="20px" />
          </IconButton>
        </StyledButtonWrapper>
      </StyledFormNoteContainer>
    </Modal>
  );
}

export default NoteForm;
