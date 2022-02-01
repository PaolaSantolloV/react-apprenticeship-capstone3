import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import IconButton from "../../components/iconButton/IconButton.component";
import NoteCard from "../../components/noteCard/NoteCard.component";
import NoteForm from "../../components/noteForm/NoteForm.component";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import {
  StyledWrapperAdd,
  StyledWrapperNotes,
  StyledWrapperError,
  StyledLabelError,
} from "./Notes.styles";

function NotesPage() {
  const { activeNotes, isLoading, searchTerm, getNotes } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [noteDataEdit, setNoteDateEdit] = useState({});

  const handleModal = () => setShowModal(!showModal);
  const handleModalEdit = () => setShowModalEdit(!showModalEdit);
  function handleDataEdit(data) {
    setNoteDateEdit(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div title="notes">
      <StyledWrapperAdd>
        <IconButton
          backgroundColor="transparent"
          border="#858ae3"
          title="add-note"
          onClick={handleModal}
          text="Add a new note"
          textColor="##858ae3"
        >
          <FiPlus color="#858ae3" size="20px" />
        </IconButton>
      </StyledWrapperAdd>
      <NoteForm
        handleModal={handleModal}
        showModal={showModal}
        isForm
        isArchived={false}
      />
      {noteDataEdit !== undefined && (
        <NoteForm
          handleModal={handleModalEdit}
          showModal={showModalEdit}
          isForm={false}
          isArchived={false}
          noteDataEdit={noteDataEdit}
        />
      )}

      <StyledWrapperNotes>
        {searchTerm.length > 0 ? (
          activeNotes
            .filter((note) => note.note.includes(searchTerm))
            .map((note) => (
              <NoteCard
                onClick={() => {
                  handleDataEdit(note), handleModalEdit();
                }}
                key={note.id}
                {...note}
              />
            ))
        ) : activeNotes.length > 0 ? (
          activeNotes.map((note) => (
            <NoteCard
              onClick={() => (handleDataEdit(note), handleModalEdit())}
              key={note.id}
              {...note}
            />
          ))
        ) : isLoading === true ? (
          <h2>Loading...</h2>
        ) : (
          <StyledWrapperError>
            <StyledLabelError title="no-notes">
              There are no notes, please add a new note.
            </StyledLabelError>
          </StyledWrapperError>
        )}
      </StyledWrapperNotes>
    </div>
  );
}

export default NotesPage;
