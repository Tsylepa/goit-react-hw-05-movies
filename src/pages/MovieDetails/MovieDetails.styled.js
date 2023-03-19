import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Info = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  img {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.05em;

  :hover {
    color: orangered;
  }
`;

export const MoreInfo = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0 15px;
  font-weight: 500;
  color: orangered;

  li {
    display: flex;
    align-items: center;

    :hover {
      color: orange;
    }
  }
`;

export const MoreLink = styled(NavLink)`
  position: relative;

  ::before {
    position: absolute;
    left: -14px;
    content: '+';
    transition: content 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: orange;
  }
  &.active::before {
    content: '-';
  }
`;

export const Meta = styled.p`
  display: flex;
  color: gray;
  gap: 10px;
`;
