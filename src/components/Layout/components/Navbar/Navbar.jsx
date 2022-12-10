import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const { pages } = props;

  return (
    <nav className="navbar">
      <ul className="sidebar__list-items">
        {pages.map((page) => (
          <li key={`${page.id}-page`}>
            <NavLink
              to={page.id}
              className={({ isActive }) =>
                isActive ? "link is-active" : "link"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <FontAwesomeIcon className="cart" icon={faCartArrowDown} />
    </nav>
  );
}
