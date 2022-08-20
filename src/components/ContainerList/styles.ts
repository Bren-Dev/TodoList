import styled from "styled-components";

export const TitleTask = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`;

export const DivIcons = styled.div`
  display: flex;
`;

export const DivIconExclamation = styled.div`
  svg {
    color: green;
  }
  border: green 1px solid;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 2px;
`;

export const DivIconTrash = styled.div`
  svg {
    color: red;
  }
  border: red 1px solid;
  padding: 5px;
  cursor: pointer;
  border-radius: 2px;
`;
