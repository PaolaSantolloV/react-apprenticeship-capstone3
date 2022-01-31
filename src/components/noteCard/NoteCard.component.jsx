import React from "react";
import {
  StyledColor,
  StyledLabel,
  StyledNoteContainer,
  StyledWrapperColor,
} from "./NoteCard.styles";

// eslint-disable-next-line react/prop-types
function NoteCard({ note, color, id }) {
  return (
    <StyledNoteContainer title={id}>
      <StyledWrapperColor title="selected-color">
        <StyledColor color={color} />
      </StyledWrapperColor>
      <StyledLabel title="note-text">{note}</StyledLabel>
    </StyledNoteContainer>
  );
}
export default NoteCard;
