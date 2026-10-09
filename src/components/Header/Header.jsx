import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"} className="brand-link">
          <div className="brand-icon-wrapper">
            <img
              src="/img/footware/Logo/mi-logo.png"
              alt="Logo CastroShops"
              className="clothing-icon"
            />
          </div>
          <span className="brand-title">CastroShops</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
