import React, { Component } from 'react';
import './Servicios.css';
import {Link} from 'react-router-dom';

class Servicios extends Component {
  render() {
    return (
      <div className="background">

        <section className="firesite-row is-page-header-row">
          <div className="firesite-row__inner">
            <div className="firesite-page-header">
              <div className="firesite-page-header__title">Productos</div>
              <div className="firesite-page-header__tagline">
                Nuestros productos combinan fuerzas para mejorar las apps y empoderar a los usuarios.</div>
            </div>

            <div className="firesite-columns">
              <div className="firesite-columns__col jump">
                <span>Compila mejores apps</span>
                  <div className="firesite-button no-pad">
                      Pasar a los productos de creación
                  </div>
              </div>

              <div className="firesite-columns__col jump">
                <span>Aumenta tu público</span>
                  <div className="firesite-button no-pad">
                    Pasar a los productos de crecimiento
                  </div>
              </div>
            </div>
          </div>
        </section>

        <br/>

        <section className="firesite-row is-card">
          <div className="firesite-row__inner">
            <div className="firesite-row-header">
              <div className="firesite-row-header__title">
                Compila y prueba tu app
              </div>
            </div>
            <div className="firesite-feature-boxes2">
              <div className="firesite-feature-boxes__box">
                <div>
                  <div className="firesite-feature-icon2">
                    <i className="gmp-icons"></i>
                  </div>
                </div>
                <div className="firesite-feature-boxes__title">
                  <div>
                    Tareas Diarias
                  </div>
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                  sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                  persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera
                  que logró hacer un libro de textos especimen.
                </article>
              </div>
              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Monitor de Rendimiento
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Realizar Examenes
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Envio de Tareas
                </div>
                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Chatea con tus Maestros
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Autenticación
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Disponible en Android y IOS
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Calendario
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

            </div>
          </div>
        </section>

        <br/>

        <section className="firesite-row is-card">
          <div className="firesite-row__inner">
            <div className="firesite-row-header">
              <div className="firesite-row-header__title">
                Compila y prueba tu app
              </div>
            </div>
            <div className="firesite-feature-boxes2">
              <div className="firesite-feature-boxes__box">
                <div>
                  <div className="firesite-feature-icon2">
                    <i className="gmp-icons"></i>
                  </div>
                </div>
                <div className="firesite-feature-boxes__title">
                  <div>
                    Analisis
                  </div>
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>
              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Mensajes
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Envía notificaciones y mensajes orientados
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Grupos
                </div>
                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Links Dinamicos
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Configuracion
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Invitaciones
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Contacto
                </div>

                <article className="firesite-feature-boxes__description">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                  el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                  que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                  hacer un libro de textos especimen.
                </article>
              </div>

            </div>
          </div>
        </section>

        <br/>

        <section className="firesite-row is-card">
          <div className="firesite-row__inner see-use-cases">
            <div className="firesite-row-header__title">
              Usa Firebase para superar los desafíos más exigentes
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Servicios;
