import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Play</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;

  &.active {
    background: papayawhip;
    color: salmon;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #666;
  color: white;
  height: 48px;
`;
