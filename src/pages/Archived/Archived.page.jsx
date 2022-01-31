import React from "react";
import NoteCard from "../../components/noteCard/NoteCard.component";
import { useGlobalContext } from "../../providers/Global/Global.provider";
import {
  StyledWrapperError,
  StyledLabelError,
  StyledWrapperNotes,
} from "./Archived.styles";

function ArchivedPage() {
  const { archiveNotes } = useGlobalContext();

  return (
    <div title="archived">
      <StyledWrapperNotes>
        {archiveNotes.length > 0 ? (
          archiveNotes.map((note) => <NoteCard key={note.id} {...note} />)
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
