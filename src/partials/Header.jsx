import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="text-white py-3 shadow-lg position-sticky top-0 z-3"
      style={{ backgroundColor: "#04060E" }}
    >
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="fs-4 m-0">GameView</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-white ${
                  isActive ? "fw-bold text-decoration-underline" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `nav-link text-white ${
                  isActive ? "fw-bold text-decoration-underline" : ""
                }`
              }
            >
              Ricerca Avanzata
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
