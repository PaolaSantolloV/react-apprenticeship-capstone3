import React from "react";
import {
  StyledColor,
  StyledLabel,
  StyledNoteContainer,
  StyledWrapperColor,
} from "./NoteCard.styles";

// eslint-disable-next-line react/prop-types
function NoteCard({ text }) {
  return (
    <StyledNoteContainer>
      <StyledWrapperColor title="selected-color">
        <StyledColor />
      </StyledWrapperColor>
      <StyledLabel title="note-text">{text}</StyledLabel>
    </StyledNoteContainer>
  );
}
export default NoteCard;
