import React from 'react';
import {Link} from 'react-router-dom';
import user from '../../assets/user.png';
import tiny from '../../assets/tiny.png';
import './Navi.css';

export const NavDisplay = ({isLogged, signOut, photoURL}) => {
  return (

    <div className="nav-home">
      <div className="devsite-top-logo-row-wrapper-wrapper" style={{position:"relative"}}>
        <div className="devsite-top-logo-row-wrapper">
          <div className="devsite-top-logo-row devsite-full-site-width">
            {/*<button type="button" className="devsite-expand-section-nav
            devsite-header-icon-button button-flat material-icons" data-label="Hamburger menu">
            </button>*/}
            <div className="devsite-product-name-wrapper">
              <Link to="/">
                <img className="tiny" src={tiny} alt="logo"/>
              </Link>
              {/*<span className="devsite-site-name devsite-product-name">Nombre</span>*/}
            </div>

            <div className="devsite-header-upper-tabs">
              <nav className="devsite-doc-set-nav devsite-nav devsite-overflow-tabs-scroll-wrapper">
                <ul className="devsite-doc-set-nav-tab-list devsite-overflow-tabs-scroll" style={{left: "0px"}}>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/Servicios" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Servicios
                    </Link>
                  </li>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/Uso" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Casos de Uso
                    </Link>
                  </li>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/Precios" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Precios
                    </Link>
                  </li>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/Contacto" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Contacto
                    </Link>
                  </li>
                </ul>
                {/*<button type="button" className="devsite-overflow-tabs-scroll-button devsite-top-button
                material-icons devsite-scroll-forward devsite-hidden">
                </button>*/}
              </nav>
            </div>

            <Link to="/Tareas" className="devsite-header-link devsite-top-button button">
              Ir a tareas
            </Link>

            {!isLogged ?
                <div className="devsite-header-link devsite-top-button button">
                <Link to="/login" >
                    <span>Iniciar Sesion</span>
                </Link></div>:
                <div className="dropdown" style={{display:"flex", alignItems:"center"}}>
                    <button className="dropbtn"><img className="userphoto" src={photoURL ? photoURL : user} alt=""/></button>
                    <div className="dropdown-content">
                        <Link to="/perfil">Perfil</Link>
                        <Link onClick={signOut} to="/">Cerrar sesión</Link>
                    </div>

                    <button  className="close">Cerrar sesion</button>

                </div>}

          </div>
        </div>
      </div>
    </div>
  );
};
