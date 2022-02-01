import React, { useState, useEffect } from "react";
import NoteCard from "../../components/noteCard/NoteCard.component";
import NoteForm from "../../components/noteForm/NoteForm.component";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import {
  StyledWrapperError,
  StyledLabelError,
  StyledWrapperNotes,
} from "./Archived.styles";

function ArchivedPage() {
  const { archiveNotes, searchTerm, isLoading, getNotes } = useGlobalContext();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [noteDataEdit, setNoteDateEdit] = useState({});

  const handleModalEdit = () => setShowModalEdit(!showModalEdit);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div title="archived">
      <NoteForm
        handleModal={handleModalEdit}
        showModal={showModalEdit}
        isForm={false}
        isArchived={true}
        noteDataEdit={noteDataEdit}
      />
      <StyledWrapperNotes>
        {searchTerm.length > 0 ? (
          archiveNotes
            .filter((note) => note.note.includes(searchTerm))
            .map((note) => (
              <NoteCard
                onClick={() => {
                  setNoteDateEdit(note), handleModalEdit();
                }}
                key={note.id}
                {...note}
              />
            ))
        ) : archiveNotes.length > 0 ? (
          archiveNotes.map((note) => (
            <NoteCard
              onClick={() => {
                setNoteDateEdit(note), handleModalEdit();
              }}
              key={note.id}
              {...note}
            />
          ))
        ) : isLoading === true ? (
          <h2>Loading...</h2>
        ) : (
          <StyledWrapperError>
            <StyledLabelError title="no-notes">
              You dont have archived notes.
            </StyledLabelError>
          </StyledWrapperError>
        )}
      </StyledWrapperNotes>
    </div>
  );
}

export default ArchivedPage;
