import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="nav-icon"
    aria-hidden="true"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="nav-icon"
    aria-hidden="true"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav aria-label="Navegación principal">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            title="Inicio"
            aria-label="Ir al inicio"
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `nav-link cart-link ${isActive ? "active" : ""}`
            }
            title="Carrito de compras"
            aria-label="Ver carrito de compras"
          >
            <CartIcon />
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

