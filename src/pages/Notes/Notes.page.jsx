import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import IconButton from "../../components/iconButton/IconButton.component";
import NoteCard from "../../components/noteCard/NoteCard.component";
import NoteForm from "../../components/noteForm/NoteForm.component";
// import { useAuthContext } from "../../providers/Auth/Auth.provider";
import { StyledWrapperAdd } from "./Notes.styles";

function NotesPage() {
  // const { userData } = useAuthContext();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

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
      <NoteCard text="test" />
    </div>
  );
}

export default NotesPage;
