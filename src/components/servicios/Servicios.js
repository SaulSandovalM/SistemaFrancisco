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
            <div className="firesite-feature-boxes">
              <div className="firesite-feature-boxes__box">
                <div>
                  <div className="firesite-feature-icon">
                    <i className="gmp-icons"></i>
                  </div>
              </div>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/database?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="realtime-database">
                    Realtime&nbsp;Database
  </a>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__meta-note">Pago según la escala</div>
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="Compatible con iOS">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
                <i class="gmp-icons plat_web" data-tooltip="Compatible con web">plat_web</i>
                <i class="gmp-icons plat_cpp" data-tooltip="Compatible con C++">plat_cpp</i>
                <i class="gmp-icons plat_unity" data-tooltip="Compatible con Unity">plat_unity</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Almacena y sincroniza datos entre usuarios y dispositivos en tiempo real a través de una base de datos noSQL alojada en la nube. Los datos actualizados se sincronizan entre distintos dispositivos conectados en milisegundos y permanecen disponibles si la app pierde la conexión a la red, lo que brinda una experiencia del usuario de alta calidad sin importar el estado de la conectividad.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/database?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="realtime-database">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/database/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="realtime-database">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="realtime-database">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--realtime-database">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/crashlytics/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="crashlytics">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_crashlytics</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/crashlytics/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="crashlytics">
                    Crashlytics
  </a>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="Compatible con iOS">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Reduce your troubleshooting time by turning an avalanche of crashes into a manageable list of issues. Get clear, actionable insight into which issues to tackle first by seeing the user impact right in the Crashlytics dashboard. Realtime alerts will help you stay on top of stability even on the go. Crashlytics is the primary crash reporter for Firebase.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/crashlytics/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="crashlytics">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/crashlytics/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="crashlytics">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="crashlytics">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--crashlytics">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/firestore/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="cloud-firestore">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_firestore</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/firestore/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="cloud-firestore">
                    Cloud Firestore
  </a>
              <span class="firesite-beta-tag">beta</span>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__meta-note">Pago según la escala</div>
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="Compatible con iOS">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
                <i class="gmp-icons plat_web" data-tooltip="Compatible con web">plat_web</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Store and sync data between users and devices - at global scale - using a cloud-hosted, noSQL database. Cloud Firestore gives you live synchronization and offline support along with efficient data queries. Its integration with other Firebase products enables you to build truly serverless apps.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/firestore/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="cloud-firestore">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/firestore/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="cloud-firestore">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="cloud-firestore">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--cloud-firestore">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/auth/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="authentication">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_auth</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/auth/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="authentication">
                    Authentication
  </a>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="Compatible con iOS">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
                <i class="gmp-icons plat_web" data-tooltip="Compatible con web">plat_web</i>
                <i class="gmp-icons plat_cpp" data-tooltip="Compatible con C++">plat_cpp</i>
                <i class="gmp-icons plat_unity" data-tooltip="Compatible con Unity">plat_unity</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Administra tus usuarios de manera simple y segura. Firebase&nbsp;Auth ofrece varios métodos para autenticar, entre ellos correo electrónico y contraseña, proveedores externos como Google o Facebook, o tu sistema de cuentas existente de manera directa. Crea tu propia interfaz o aprovecha nuestra IU de código abierto y totalmente personalizable.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/auth/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="authentication">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/auth/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="authentication">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="authentication">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--authentication">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/functions/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="cloud-functions">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_functions</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/functions/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="cloud-functions">
                    Cloud&nbsp;Functions
  </a>
              <span class="firesite-beta-tag">beta</span>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__meta-note">Pago según la escala</div>
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="Compatible con iOS">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
                <i class="gmp-icons plat_web" data-tooltip="Compatible con web">plat_web</i>
                <i class="gmp-icons plat_cpp" data-tooltip="Compatible con C++">plat_cpp</i>
                <i class="gmp-icons plat_unity" data-tooltip="Compatible con Unity">plat_unity</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Extiende tu app con código de back-end personalizado sin necesidad de administrar ni escalar tus propios servidores. Las funciones pueden activarse con eventos que emiten los productos de Firebase, los servicios de Google&nbsp;Cloud o terceros, por medio de webhooks.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/functions/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="cloud-functions">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/functions/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="cloud-functions">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="cloud-functions">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--cloud-functions">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/storage/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="cloud-storage">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_storage</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/storage/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="cloud-storage">
                    Cloud&nbsp;Storage
  </a>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__meta-note">Pago según la escala</div>
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="Compatible con iOS">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
                <i class="gmp-icons plat_web" data-tooltip="Compatible con web">plat_web</i>
                <i class="gmp-icons plat_cpp" data-tooltip="Compatible con C++">plat_cpp</i>
                <i class="gmp-icons plat_unity" data-tooltip="Compatible con Unity">plat_unity</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Almacena y comparte imágenes, audio, video y otros tipos de contenido generado por los usuarios fácilmente con el almacenamiento de objetos potente, simple y rentable creado para la escala de Google. Los SDK de Firebase para Cloud&nbsp;Storage incorporan la seguridad de Google a las cargas y descargas de archivos para tus apps de Firebase, sin importar la calidad de la red.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/storage/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="cloud-storage">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/storage/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="cloud-storage">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="cloud-storage">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--cloud-storage">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/hosting?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="hosting">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_hosting</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/hosting?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="hosting">
                    Hosting
  </a>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__meta-note">Pago según la escala</div>
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_web" data-tooltip="Compatible con web">plat_web</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Simplifica el alojamiento web estático con herramientas creadas específicamente para las aplicaciones&nbsp;web modernas. Cuando subes tus recursos web, los enviamos automáticamente a nuestro CDN global y les asignamos un certificado SSL gratuito, de manera que los usuarios disfruten una experiencia segura, confiable y con poca latencia sin importar su ubicación.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/hosting?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="hosting">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/hosting/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="hosting">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="hosting">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--hosting">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/test-lab/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="test-lab-for-android">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_test_lab</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/test-lab/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="test-lab-for-android">
                    Test&nbsp;Lab para Android
  </a>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__meta-note">Pago según la escala</div>
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Ejecuta pruebas automáticas y personalizadas para tu app en dispositivos virtuales y físicos alojados en Google. Usa Firebase&nbsp;Test&nbsp;Lab durante el ciclo de programación para descubrir inconsistencias y errores, de forma que puedas ofrecer una experiencia de alta calidad en una amplia gama de dispositivos.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/test-lab/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="test-lab-for-android">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/test-lab/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="test-lab-for-android">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="test-lab-for-android">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--test-lab-for-android">play_circle_filled</i>
  </a>
          </footer>
        </div>
        <div class="firesite-feature-boxes__box is-pillar-develop-features">
  <a href="https://firebase.google.com/products/performance/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="performance-monitoring">
                  <div class="firesite-feature-icon">
              <i class="gmp-icons">gmp_performance</i>
            </div>
  </a>
          <div class="firesite-feature-boxes__title">
  <a href="https://firebase.google.com/products/performance/?hl=es-419" class=" gc-analytics-event" data-category="feature" data-action="productClick" data-label="performance-monitoring">
                    Supervisión del rendimiento
  </a>
              <span class="firesite-beta-tag">beta</span>
          </div>
          <div class="firesite-feature-boxes__meta">
            <div class="firesite-feature-boxes__platforms">
                <i class="gmp-icons plat_ios" data-tooltip="iOS Supported">plat_ios</i>
                <i class="gmp-icons plat_android" data-tooltip="Compatible con Android">plat_android</i>
            </div>
          </div>
          <article class="firesite-feature-boxes__description">Diagnose app performance issues occurring on your users’ devices. Use traces to monitor the performance of specific parts of your app and see a summarized view in the Firebase console. Stay on top of your app’s startup time and monitor HTTP requests without writing any code.
</article>
          <footer class="firesite-feature__footer">
  <a href="https://firebase.google.com/products/performance/?hl=es-419" class="button button-white gc-analytics-event" data-category="feature" data-action="learnMore" data-label="performance-monitoring">
                      Más información
  </a>
  <a href="https://firebase.google.com/docs/perf-mon/?hl=es-419" class="button button-white firesite-button--gray gc-analytics-event" data-category="feature-docs" data-action="linkClick" data-label="performance-monitoring">
                    Ir a la documentación
  </a>
  <a class="devsite-dialog-button play-icon gc-analytics-event" data-category="feature" data-action="watchVideo" data-label="performance-monitoring">
                    <i class="material-icons" data-tooltip="Reproducir el video" data-modal-dialog-id="video-modal--performance-monitoring">play_circle_filled</i>
  </a>
          </footer>
        </div>
    </div>
  </div>
</section>

      </div>
    );
  }
}

export default Servicios;
