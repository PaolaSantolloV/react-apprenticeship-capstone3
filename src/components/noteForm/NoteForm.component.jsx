/* eslint-disable react/prop-types */
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
import { useEditNote } from "../../hooks/useEditNote";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

function NoteForm({
  id,
  isArchived,
  showModal,
  handleModal,
  isForm,
  noteDataEdit,
}) {
  const { setIsLoading } = useGlobalContext();
  const { userData } = useAuthContext();
  const [showSelectColor, setShowSelectColor] = useState(false);
  const [isError, setIsError] = useState(false);
  const [colorSelected, setColorSelected] = useState({
    background: "#fff",
  });

  console.log(noteDataEdit);
  const [noteData, setNoteData] = useState(
    noteDataEdit
      ? noteDataEdit
      : {
          note: "",
          color: "#fff",
          status: true,
          idUser: userData.user.uid,
        }
  );

  console.log(noteData);

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
        setIsLoading(true);
        handleModal();
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const edit = async () => {
    useEditNote(noteDataEdit.id, noteData)
      .then(() => {
        setIsLoading(true);
        handleModal();
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const archive = async () => {
    console.log("arch");
    const data = {
      note: noteDataEdit.note,
      color: noteDataEdit.color,
      status: false,
      idUser: userData.user.uid,
    };
    console.log(data);
    useEditNote(noteDataEdit.id, data)
      .then(() => {
        setIsLoading(true);
        handleModal();
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const restaure = async () => {
    const data = {
      note: noteDataEdit.note,
      color: noteDataEdit.color,
      status: true,
      idUser: userData.user.uid,
    };
    useEditNote(noteDataEdit.id, data)
      .then(() => {
        setIsLoading(true);
        handleModal();
        setIsLoading(false);
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
              <IconButton title="archive" onClick={restaure}>
                <FiRotateCcw color="#9A7722" size="18px" />
              </IconButton>
            ) : (
              <IconButton title="restore" onClick={archive}>
                <FiTrash color="#9A7722" size="18px" />
              </IconButton>
            ))}

          <IconButton title="save" onClick={isForm === false ? edit : add}>
            <FiCheck color="#43C16B" size="20px" />
          </IconButton>
        </StyledButtonWrapper>
      </StyledFormNoteContainer>
    </Modal>
  );
}

export default NoteForm;
