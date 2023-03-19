import styled from 'styled-components';

export const Field = styled.input`
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 20px;
  border: 2px solid black;

  :focus {
    border-color: orangered;
  }
`;

export const Submit = styled.button`
  height: 100%;
  font-size: 20px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  margin-left: 6px;

  :hover {
    background-color: orange;
    cursor: pointer;
  }
`;
