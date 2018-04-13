import React, { Component } from 'react';
import './Servicios.css';
import {Link} from 'react-router-dom';

class Servicios extends Component {
  render() {
    return (
      <div>

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
                    Realtime&nbsp;Database
                  </div>
                </div>

                <article className="firesite-feature-boxes__description">
                  Almacena y sincroniza datos entre usuarios y dispositivos en tiempo real a través de una base de datos noSQL alojada en la nube. Los datos actualizados se sincronizan entre distintos dispositivos conectados en milisegundos y permanecen disponibles si la app pierde la conexión a la red, lo que brinda una experiencia del usuario de alta calidad sin importar el estado de la conectividad.
                </article>
              </div>
              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Crashlytics
                </div>

                <article className="firesite-feature-boxes__description">
                  Reduce your troubleshooting time by turning an avalanche of crashes into a manageable list of issues. Get clear, actionable insight into which issues to tackle first by seeing the user impact right in the Crashlytics dashboard. Realtime alerts will help you stay on top of stability even on the go. Crashlytics is the primary crash reporter for Firebase.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>
                <article className="firesite-feature-boxes__description">
                  Administra tus usuarios de manera simple y segura. Firebase&nbsp;Auth ofrece varios métodos para autenticar, entre ellos correo electrónico y contraseña, proveedores externos como Google o Facebook, o tu sistema de cuentas existente de manera directa. Crea tu propia interfaz o aprovecha nuestra IU de código abierto y totalmente personalizable.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
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
                    Realtime&nbsp;Database
                  </div>
                </div>

                <article className="firesite-feature-boxes__description">
                  Almacena y sincroniza datos entre usuarios y dispositivos en tiempo real a través de una base de datos noSQL alojada en la nube. Los datos actualizados se sincronizan entre distintos dispositivos conectados en milisegundos y permanecen disponibles si la app pierde la conexión a la red, lo que brinda una experiencia del usuario de alta calidad sin importar el estado de la conectividad.
                </article>
              </div>
              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Crashlytics
                </div>

                <article className="firesite-feature-boxes__description">
                  Reduce your troubleshooting time by turning an avalanche of crashes into a manageable list of issues. Get clear, actionable insight into which issues to tackle first by seeing the user impact right in the Crashlytics dashboard. Realtime alerts will help you stay on top of stability even on the go. Crashlytics is the primary crash reporter for Firebase.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>
                <article className="firesite-feature-boxes__description">
                  Administra tus usuarios de manera simple y segura. Firebase&nbsp;Auth ofrece varios métodos para autenticar, entre ellos correo electrónico y contraseña, proveedores externos como Google o Facebook, o tu sistema de cuentas existente de manera directa. Crea tu propia interfaz o aprovecha nuestra IU de código abierto y totalmente personalizable.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
                </article>
              </div>

              <div className="firesite-feature-boxes__box is-pillar-develop-features">
                <div className="firesite-feature-icon2">
                  <i className="gmp-icons"></i>
                </div>
                <div className="firesite-feature-boxes__title">
                  Cloud Firestore
                </div>

                <article className="firesite-feature-boxes__description">
                  Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
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
            <Link to="/Uso">
              <div className="firesite-button is-hero is-raised gc-analytics-event">
                Ver casos de uso
              </div>
            </Link>
          </div>
        </section>

      </div>
    );
  }
}

export default Servicios;
