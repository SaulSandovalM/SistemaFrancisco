import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/geek_completo.png';
import user from '../../assets/user.png';

export const NavDisplay = ({isLogged, signOut, photoURL}) => {
  return (
    <div className="devsite-top-section nocontent devsite-top-section-pinned">
      <div className="devsite-top-logo-row-wrapper-wrapper" style={{position:"relative"}}>
        <div className="devsite-top-logo-row-wrapper">
          <div className="devsite-top-logo-row devsite-full-site-width">
            {/*<button type="button" className="devsite-expand-section-nav
            devsite-header-icon-button button-flat material-icons" data-label="Hamburger menu">
            </button>*/}
            <div className="devsite-product-name-wrapper">
              <Link to="/">
                <img className="devsite-site-logo" src={logo} alt="logo"/>
              </Link>
              {/*<span className="devsite-site-name devsite-product-name">Nombre</span>*/}
            </div>

            <div className="devsite-header-upper-tabs">
              <nav className="devsite-doc-set-nav devsite-nav devsite-overflow-tabs-scroll-wrapper">
                <ul className="devsite-doc-set-nav-tab-list devsite-overflow-tabs-scroll" style={{left: "0px"}}>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Productos
                    </Link>
                  </li>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Casos de Uso
                    </Link>
                  </li>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Precios
                    </Link>
                  </li>
                  <li className="devsite-doc-set-nav-tab-container devsite-nav-tab">
                    <Link to="/" className="devsite-nav-tab devsite-doc-set-nav-tab">
                      Contacto
                    </Link>
                  </li>
                </ul>
                {/*<button type="button" className="devsite-overflow-tabs-scroll-button devsite-top-button
                material-icons devsite-scroll-forward devsite-hidden">
                </button>*/}
              </nav>
            </div>

            <Link to="/" className="devsite-header-link devsite-top-button button">
              Ir a tareas
            </Link>

            <img className="devsite-user-avatar" src={user} alt="user"/>

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


{/*}<div className="pestanas">
    <Link to="/bootcamp">
        <span className="less">Learn Now</span>
    </Link>
    <hr className="divider"/>

    {!isLogged ?
        <div className="log">
        <Link to="/login" >
            <span >Login</span>
        </Link></div>:
        <div className="dropdown" style={{display:"flex", alignItems:"center"}}>
            <button className="dropbtn"><img className="userphoto" src={photoURL ? photoURL : user} alt=""/></button>
            <div className="dropdown-content">
                <Link to="/perfil">Perfil</Link>
                <Link onClick={signOut} to="/">Cerrar sesión</Link>
            </div>

            {/*<button  className="close" >Cerrar sesion</button>*/}

        {/*</div>*/} //esta si lleva el ultimo parentecis
{/*</div>*/}





{/*<div className="logo">
    <Link to="/">
        <img className="logo_fix" src={logo} alt="logo"/>
    </Link>
</div>*/}
