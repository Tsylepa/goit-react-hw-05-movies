import { Container } from '../SharedLayout.styled';
import { Wrapper, NavList, Page } from './Header.styled';

const navItems = {
  home: '/',
  movies: '/movies',
};
const navItemsKeys = Object.keys(navItems);

function Header() {
  return (
    <Wrapper>
      <Container>
        <nav>
          <NavList>
            {navItemsKeys.map(page => (
              <li key={page}>
                <Page to={navItems[page]} activeclassname="active">
                  {page}
                </Page>
              </li>
            ))}
          </NavList>
        </nav>
      </Container>
    </Wrapper>
  );
}

export default Header;
