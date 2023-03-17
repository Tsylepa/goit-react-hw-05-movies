const { Link } = require('react-router-dom');

const navItems = {
  home: '/',
  movies: '/movies',
};
const navItemsKeys = Object.keys(navItems);

function Header() {
  return (
    <nav>
      <ul>
        {navItemsKeys.map(page => (
          <li key={page}>
            <Link to={navItems[page]}>{page}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
