import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import IconButton from "../../components/iconButton/IconButton.component";
import NoteCard from "../../components/noteCard/NoteCard.component";
import NoteForm from "../../components/noteForm/NoteForm.component";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import { StyledWrapperAdd, StyledWrapperNotes } from "./Notes.styles";

function NotesPage() {
  const { allNotes } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  console.log(allNotes);

  return (
    <div title="notes">
      <StyledWrapperAdd>
        <IconButton
          backgroundColor="transparent"
          border="#858ae3"
          title="add-note"
          onClick={handleModal}
          text="Add a new note"
        >
          <FiPlus color="#858ae3" size="20px" />
        </IconButton>
      </StyledWrapperAdd>
      <NoteForm handleModal={handleModal} showModal={showModal} />
      <StyledWrapperNotes>
        {allNotes.length > 0 ? (
          allNotes.map((note) => <NoteCard key={note.id} {...note} />)
        ) : (
          <h2 title="no-notes">there are no notes, please add a new note</h2>
        )}
      </StyledWrapperNotes>
    </div>
  );
}

export default NotesPage;
