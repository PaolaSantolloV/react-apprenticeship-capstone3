import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-bottom: 100%;

  @media (max-width: 900px) {
    margin-bottom: 140%;
  }

  @media (max-width: 750px) {
    margin-bottom: 160%;
  }

  @media (max-width: 480px) {
    margin-bottom: 180%;
  }
  @media (max-width: 400px) {
    margin-bottom: 200%;
  }
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 60%;
  border-radius: 2px;
  position: absolute;
  top: 25%;
  left: 20%;
  padding: 30px;

  @media (max-width: 600px) {
    top: 10%;
    left: 12%;
  }
}
`;

export const StyledLabelTitle = styled.h1`
  font-weight: 600;
  font-size: x-large;
  margin-bottom: 5px;
`;

export const StyledLabelCaption = styled.h2`
  font-weight: 100;
  font-size: medium;
  color: #a6a6a6;
  margin: 0;
`;

export const StyledWrapper = styled.div`
  margin-bottom: 35px;
`;

export const StyledWrapperButton = styled.div`
  margin-top: 28px;
  width: 170px;
`;

export const StyledLabelQuestion = styled.p`
  color: #a6a6a6;
  font-size: small;
  font-weight: 500;
  text-align: right;
  margin-bottom: 28px;
`;

export const StyledLabelError = styled.p`
  font-size: x-small;
  font-weight: 100;
  color: red;
  margin-top: 6px;
`;
