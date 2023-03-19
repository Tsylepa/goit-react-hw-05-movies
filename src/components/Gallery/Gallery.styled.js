import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 20px auto;
`;

export const Movie = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.04em;
`;
