import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon } from 'antd';
import complemento1 from '../../assets/home/complemento1.jpg';
import complemento2 from '../../assets/home/complemento2.jpg';
import 'antd/dist/antd.css';
import './Home.css';

class HomeContainer extends Component {
  componentWillMount(){}

  componentDidMount () {
      window.scroll(0, 0)
  }

  render() {
    return (
      <div className="background">
        <div className="firesite-event-banner firesite-event-banner--dark firesite-event-banner--crashlytics-launch">
          <div className="firesite-row">
            <div className="firesite-event-banner__content">
              <span className="cta-text">
                Prioriza y soluciona problemas con tu organizacion a la hora de hacer tus tareas.
              </span>
            </div>
          </div>
        </div>

        <section className="firesite-row is-page-header-row intro-card">
          <div className="firesite-row__inner">
            <div className="firesite-page-header">
              <div className="firebase">
              Este sistema te ayuda a no olvidar tareas con la ayuda de tu dispositivo móvil y mejorar tu rendimiento escolar.
              </div>
            </div>

            <div className="firesite-row__buttons">
              <Link to="/">
                <div className="firesite-button">Comenzar</div>
                  <div className="devsite-dialog-button">
                    <i className="material-icons"></i>Mirar el video
                  </div>
              </Link>
            </div>

            <div className="firesite-columns extra-padded-columns">
              <div className="firesite-columns__col">
                <div className="border">
                <h3>Realiza tareas rápido, y en un tiempo record</h3>
                <p>Este sistema te proporciona funciones como estadísticas, informes y mensajería, de manera que puedas
                moverte con rapidez entre tus tareas.</p>
                 </div>
              </div>


              <div className="firesite-columns__col">
                <div className="ultimo">

                <h3>Con nuestro respaldo y la confianza de apps</h3>
                <p>Este sistema te proporciona funciones como estadísticas, informes y mensajería, de manera que puedas
                moverte con rapidez entre tus tareas.</p>
        </div>
               </div>




              <div className="firesite-columns__col">
                  <div className="border">

                <h3>Un sistema con servicios que funcionan en conjunto</h3>
                <p>Este sistema te proporciona funciones como estadísticas, informes y mensajería, de manera que puedas
                moverte con rapidez entre tus tareas.</p>
              </div>
                  </div>

            </div>

            <div className="firesite-row__footer">
              <div className="firesite-row-footer__body">
                Tiny es compatible con las siguientes plataformas:
                {/*<span className="nowrap">
                  <i className="gmp-icons plat" data-tooltip="iOS supported">plat_ios</i>
                  <i className="gmp-icons plat" data-tooltip="Android supported">plat_android</i>
                  <i className="gmp-icons plat" data-tooltip="Web supported">plat_web</i>
                  <i className="gmp-icons plat" data-tooltip="Unity supported">plat_unity</i>
                  <i className="gmp-icons plat" data-tooltip="C++ supported">plat_cpp</i>
                </span>*/}
              </div>
            </div>
          </div>
        </section>

        <section className="firesite-row features-card">
          <div className="firesite-row__inner">
            <div className="firesite-row-header firesite-columns">
              <div className="firesite-columns__col firesite-row-header__title">
                <h3>Descarga y adapta nuestra app complementaria</h3>
              </div>
              <p className="firesite-columns__col firesite-row-header__description"></p>
            </div>

            <div className="firesite-columns">
                      <div className="firesite-columns__col features-container">
                          <div className="div-imagen">
                          <div className="ultimo">
                      Las aplicaciones son para todos, innovan la manera de organizarnos.

              </div>
              <img className="desvanecer" src={complemento1} alt="complemento1" />
            </div>

                <h3>Prueba nuestra app</h3>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="edit" /></i>

                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Tareas Diarias
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Revisa tus tareas diariamente desde la app
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="loading-3-quarters" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Monitor de Rendimiento
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Ve tu rendimiento de tus clases
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="file" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Realizar Examenes
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Podras hacer pequeños examenes desde la app
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="key" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Autenticación
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Autenticar alumnos de forma simple y segura
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="message" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Chatea con tus Maestros
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Habla con tus profesores y preguntales alguna duda que tengas sobre la tarea
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="cloud-upload" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Envio de Tareas
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Envía la tareas a tus maestros
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="calendar" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Calendario
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Ten a la mano todas las fechas importantes
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="android-o" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div >
                          Disponible en Android y IOS
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Prueba la app en dispositivos tanto en Android como en IOS
                    </div>
                  </div>
                </div>
              </div>

              <div className="firesite-columns__col features-container is-pillar-grow">

                <div className="div-imagen">
                <div className="ultimo">
            Los alumnos podrán tener diferentes actividades.  </div>
    <img className="desvanecer" src={complemento2} alt="complemento2" />
  </div>



                <h3>Aumenta la participacion de tus alumnos</h3>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="line-chart" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Analisis
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Accede a análisis de tus alumnos facil y rapido
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="mail" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Mensajes
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Envía notificaciones y mensajes orientados
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="usergroup-add" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Grupos
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Define grupos de estudio dinámicos según el comportamiento.
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="link" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                            Links Dinamicos
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Usa vínculos directos con atribución para impulsar el crecimiento
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="file-add" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Configuracion
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Modifica o agrega tareas para tus alumnos
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="solution" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Invitaciones
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Haz que sea fácil compartir la app y el contenido
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="eye-o" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Busqueda
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Localiza algun alumno o trabajo en especifico para verlo mas a detalle
                    </div>
                  </div>
                </div>

                <div className="firesite-feature-boxes">
                    <div>
                      <div className="firesite-feature-icon">
                        <i className="gmp-icons"><Icon type="smile-o" /></i>
                      </div>
                    </div>

                  <div className="firesite-page-home-feature-strip__feature">
                    <div className="firesite-page-home-feature-strip__name">
                        <div>
                          Contacto
                        </div>
                    </div>

                    <div className="firesite-page-home-feature-strip__description">
                      Mantente en contacto tanto con los padres como con los alumnos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="firesite-row__footer firesite-googlecloud-row-footer">

              <h3>Servicio + Rápidez</h3>
                <div className="ultimo">
                <div className="firesite-row-footer__body">
                  Tienemos el respaldo de desarrolladores expertos, lo que te permite escalar nuestro sistema a miles de usuarios.
                </div>
                </div>
            </div>

          </div>
        </section>

        <section className="firesite-row usecases-card">
          <div className="firesite-row__inner">
            <div className="firesite-row-header firesite-columns">
              <div className="firesite-row-header__title firesite-columns__col firesite-columns__weight-6">
                <h3> Soluciones para desafíos comunes</h3>
              </div>
              <div className="ultimo">
              <p className="firesite-row-header__description firesite-columns__col firesite-columns__weight-6">
                Combina nuestros productos para resolver incluso las tareas más complejas de una institución y su crecimiento.
              </p>
              </div>
            </div>
            <div className="firesite-columns use-cases">
              <div className="firesite-columns__col">
                <img className="firesite-columns__image" src="https://images.pexels.com/photos/6565/apple-desk-laptop-working.jpg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <div>
                  <h3>
                    Agregamos <span className="nowrap">funciones nuevas de manera progresiva</span>
                  </h3>
                  <p>
                    Si tu institucion necesita o le gustaria una funcion extra podemos agregarla a nuestro sistema.
                  </p>
                  <div className="firesite-feature-icon flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon firesite-feature-icon--grow flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon firesite-feature-icon--grow flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon firesite-feature-icon--grow flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                </div>
              </div>
              <div className="firesite-columns__col">
                    <div className="ultimo">
                <img className="firesite-columns__image" src="https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <div>

                  <h3 className="long" id="crea-un-flujo-de-incorporacin-satisfactorio-arrow_forward">
                    Ten el <span className="nowrap">mejor servicio y la mejor satisfación </span>
                  </h3>
                  <p>
                    Dales a tus alumnos una manera simple y segura de acceder a tu app. Luego, supervisa el proceso de incorporación y descubre cómo mejorarlo.
                  </p>
                  <div className="firesite-feature-icon flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                    </div>
                </div>
              </div>

              <div className="firesite-columns__col">
                <div className="ultimo">
                <img className="firesite-columns__image" src="https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <div>
                  <h3 id="agrega-chat-a-tu-app-arrow_forward">
                    Chatea en la <span className="nowrap">app</span>
                  </h3>
                  <p>
                    Ten la función de chat fácil de usar para que todos puedan chatear en tiempo real sin salir de tu app.
                  </p>
                  <div className="firesite-feature-icon flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon  flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                  <div className="firesite-feature-icon firesite-feature-icon--grow flat-icon">
                    <i className="gmp-icons"></i>
                  </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="firesite-row">
          <div className="firesite-row__inner">
            <div className="firesite-row-header firesite-columns">
              <div className="firesite-row-header__title firesite-columns__col firesite-columns__weight-5">
                Escuelas con la confianza de usar nuestro sistema
              </div>

              <p className="firesite-row-header__description firesite-columns__col firesite-columns__weight-6">

              <p className="ultimo">  Muchas personas en todas partes del estado estan usando Tiny en sus escuelas.</p>
              </p>

            </div>
            <div className="firesite-columns app-makers">
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://upmetropolitana.edu.mx/apps/H._JUNTA_DIRECTIVA/upmh1.jpg" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://alianzatex.com/imagenes/notas1/escudoupp.jpg" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="https://static4.educaedu.com.mx/adjuntos/9/00/04/cecyteh---colegio-de-estudios-cient-ficos-y-tecnol-gicos-del-estado-de-hidalgo-000435_large.jpg" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
              <div className="firesite-columns__col2 firesite-columns__weight-3">
                <img src="http://sistemas.uaeh.edu.mx/accesoGeneralMovil/SIGLAS%20UAEH-02.png" style={{height: "150px", width: "200px"}}/>
              </div>
            </div>
          </div>
        </section>

        <section className="firesite-row firesite-footer-row">
          <div className="padding">
            <div className="firesite-footer-row__tagline">
              Prueba Tiny hoy mismo. <br/> La integración del sistema a tu institución es facil.
            </div>

            <div className="firesite-row__buttons">
              <div className="firesite-button is-hero is-raised">
                Comenzar
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default HomeContainer;
