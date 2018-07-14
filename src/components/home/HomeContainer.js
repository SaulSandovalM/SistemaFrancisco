import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import 'antd/dist/antd.css';
import './Home.css';

class HomeContainer extends Component {
  render() {
    return (
      <div className="background">
        <div className="message">
          <span>
            Prioriza y soluciona problemas con tu organizacion a la hora de hacer tus tareas.
          </span>
        </div>
        <div className="container">
          <div className="card">
            <div className="title1">
              Este sistema te ayuda a no olvidar tareas con la ayuda de tu dispositivo móvil y mejorar tu rendimiento escolar.
            </div>
            <div className="back">
              {/*<Link to="/">*/}
                <div className="videoButton">
                  MIRA EL VIDEO
                </div>
              {/*</Link>*/}
            </div>
            <div className="content">
              <div className="subContent">
                <h3 className="subtitle">Realiza tareas rápido, y en un tiempo record</h3>
                <p className="text">Este sistema te proporciona funciones como estadísticas, informes y mensajería, de manera que puedas moverte con rapidez entre tus tareas.</p>
              </div>
              <div className="subContent">
                <h3 className="subtitle">Con nuestro respaldo y la confianza de apps</h3>
                <p className="text">Este sistema te proporciona funciones como estadísticas, informes y mensajería, de manera que puedas moverte con rapidez entre tus tareas.</p>
               </div>
              <div className="subContent">
                <h3 className="subtitle">Un sistema con servicios que funcionan en conjunto</h3>
                <p className="text">Este sistema te proporciona funciones como estadísticas, informes y mensajería, de manera que puedas moverte con rapidez entre tus tareas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="card">
            <div className="title2">
              Descarga nuestra app complementaria
            </div>
            <div className="columns">
              <div className="column">
                <img src="https://firebase.google.com/images/homepage/build_1x.png?authuser=0" alt="Desarrolla y prueba tu nuestra app"  className="imgs"/>
                <div className="subtitle2">
                  Prueba nuestra app
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="edit" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Tareas Diarias</p>
                    </div>
                    <div>
                      <p className="text2">Revisa tus tareas diariamente desde la app</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="loading-3-quarters" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Monitor de Rendimiento</p>
                    </div>
                    <div>
                      <p className="text2">Ve tu rendimiento de tus clases</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="file" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Realizar Examenes</p>
                    </div>
                    <div>
                      <p className="text2">Podras hacer pequeños examenes desde la app</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="key" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Autenticación</p>
                    </div>
                    <div>
                      <p className="text2">Autenticar alumnos de forma simple y segura</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="message" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Chatea con tus Maestros</p>
                    </div>
                    <div>
                      <p className="text2">Preguntales alguna duda que tengas sobre la tarea</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="cloud-upload" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Envio de Tareas</p>
                    </div>
                    <div>
                      <p className="text2">Envía la tareas a tus maestros</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="calendar" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Calendario</p>
                    </div>
                    <div>
                      <p className="text2">Ten a la mano todas las fechas importantes</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="android-o" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Disponible en Android</p>
                    </div>
                    <div>
                      <p className="text2">Prueba la app en dispositivos Android</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <img src="https://firebase.google.com/images/homepage/grow_1x.png?authuser=0" alt="Desarrolla y prueba tu nuestra app"  className="imgs"/>
                <div className="subtitle2">
                  Aumenta la participacion de tus alumnos
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="line-chart" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Analisis</p>
                    </div>
                    <div>
                      <p className="text2">Accede a análisis de tus alumnos facil y rapido</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="mail" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Mensajes</p>
                    </div>
                    <div>
                      <p className="text2">Envía notificaciones y mensajes orientados</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="usergroup-add" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Grupos</p>
                    </div>
                    <div>
                      <p className="text2">Define grupos de estudio según el comportamiento.</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="link" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Links Dinamicos</p>
                    </div>
                    <div>
                      <p className="text2">Usa vínculos directos para impulsar el crecimiento</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="file-add" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Configuracion</p>
                    </div>
                    <div>
                      <p className="text2">Modifica o agrega tareas para tus alumnos</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="solution" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Invitaciones</p>
                    </div>
                    <div>
                      <p className="text2">Haz que sea fácil compartir la app y el contenido</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="eye-o" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Busqueda</p>
                    </div>
                    <div>
                      <p className="text2">Localiza alumnos y trabajos para verlo mas a detalle</p>
                    </div>
                  </div>
                </div>
                <div className="part">
                  <div className="iconContent">
                    <i className="icon"><Icon type="smile-o" /></i>
                  </div>
                  <div className="serContent">
                    <div>
                      <p className="subtitle3">Contacto</p>
                    </div>
                    <div>
                      <p className="text2">Contacta tanto a los padres como con los alumnos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
