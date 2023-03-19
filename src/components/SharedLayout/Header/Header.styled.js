import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
  background-color: #353535;
  margin-bottom: 20px;
  padding: 12px 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const NavList = styled.nav`
  display: flex;
  gap: 12px;

  li {
    display: block;
  }
`;

export const Page = styled(NavLink)`
  padding: 6px;
  color: orangered;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 6px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: orange;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;
