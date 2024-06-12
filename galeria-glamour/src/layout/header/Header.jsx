import "./Header.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../context/Context";

export default function Header() {
    
  const burgerMenu = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024 && burgerMenu.current.checked) {
        // Si la pantalla es mayor a 1024px y el menú está abierto, lo cerramos
        burgerMenu.current.checked = false;
      }
    };
    // Event listener para el resize de la ventana
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);

  const {toggleSidebarOrder, count} = useOrder();

  return (
    <header className="main-header">
      <input
        type="checkbox"
        className="check-menu"
        id="check-menu"
        ref={burgerMenu}
      />
      <label htmlFor="check-menu" className="burger-menu">
        <div className="burger-line"></div>
      </label>
      <div className="header-logo">
        <img src="#" alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <span>Inicio</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link">
              <span>Sobre Nosotros</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              <span>Productos</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              <span>Contacto</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              <span>Iniciar Sesión</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              <span>Registrarse</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-users" className="nav-link">
              <span>Administrar Usuarios</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin-product" className="nav-link">
              <span>Administrar Productos</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-info">
        <div className="user-data">
          <div className="user-name">Julián Camacho</div>
          <img className="user-image" src="" alt="" />
        </div>
        <div
          className={`user-cart-container ${count < 1 ? "" : "show-circle"}`}
          data-count={count}
        >
          <FontAwesomeIcon
            className="user-cart"
            icon={faCartShopping}
            onClick={() => toggleSidebarOrder()}
          />
        </div>
      </div>
    </header>
  );
}
