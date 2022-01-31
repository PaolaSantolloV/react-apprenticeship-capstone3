import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { StyledIconButton } from "./NoteCard.styles";
import {
  StyledColor,
  StyledLabel,
  StyledNoteContainer,
  StyledWrapperColor,
} from "./NoteCard.styles";

// eslint-disable-next-line react/prop-types
function NoteCard({ note, color, id, onClick }) {
  return (
    <StyledNoteContainer title={id}>
      <StyledWrapperColor title="selected-color">
        <StyledIconButton title="edit" onClick={onClick}>
          <BiEditAlt color="#858ae3" size="20px" />
        </StyledIconButton>
        <StyledColor color={color} />
      </StyledWrapperColor>
      <StyledLabel title="note-text">{note}</StyledLabel>
    </StyledNoteContainer>
  );
}
export default NoteCard;
