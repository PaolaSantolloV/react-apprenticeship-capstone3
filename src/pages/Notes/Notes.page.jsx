import React, { useState } from "react";
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
  const { activeNotes } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  console.log(activeNotes);

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
        {activeNotes.length > 0 ? (
          activeNotes.map((note) => <NoteCard key={note.id} {...note} />)
        ) : (
          <StyledWrapperError>
            <StyledLabelError title="no-notes">
              there are no notes, please add a new note.
            </StyledLabelError>
          </StyledWrapperError>
        )}
      </StyledWrapperNotes>
    </div>
  );
}

export default NotesPage;
