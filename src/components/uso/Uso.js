import React, { Component } from 'react';
import './Uso.css';
import {Link} from 'react-router-dom';
import complemento1 from '../../assets/home/complemento1.png';
import complemento2 from '../../assets/home/complemento2.png';

class Uso extends Component {
  componentWillMount(){}

  componentDidMount () {
      window.scroll(0, 0)
  }

  render() {
    return (
      <div>
      <section className="firesite-row">
        <div className="firesite-row__inner">
          <div>
            <div className="firesite-page-header__title">
              Uso diario
            </div>
            <div className="firesite-page-header__tagline">
              Supera desafíos con la mejor plataforma de trabajo
              </div>
          </div>
          <div className="firesite-columns desaturated-logos">
              <div className="desaturated-logo">
                <img src="https://firebase.google.com/images/appmakers/nytimes-gray_1x.png" srcset="https://firebase.google.com/images/appmakers/nytimes-gray_1x.png 1x,https://firebase.google.com/images/appmakers/nytimes-gray_2x.png 2x"/>
              </div>
              <div className="desaturated-logo">
                <img src="https://firebase.google.com/images/appmakers/the-economist-gray_1x.png" srcset="https://firebase.google.com/images/appmakers/the-economist-gray_1x.png 1x,https://firebase.google.com/images/appmakers/the-economist-gray_2x.png 2x"/>
              </div>
              <div className="desaturated-logo">
                <img src="https://firebase.google.com/images/appmakers/shazam-gray_1x.png" srcset="https://firebase.google.com/images/appmakers/shazam-gray_1x.png 1x,https://firebase.google.com/images/appmakers/shazam-gray_2x.png 2x"/>
              </div>
              <div className="desaturated-logo">
                <img src="https://firebase.google.com/images/appmakers/alibaba-gray_1x.png" srcset="https://firebase.google.com/images/appmakers/alibaba-gray_1x.png 1x,https://firebase.google.com/images/appmakers/alibaba-gray_2x.png 2x"/>
              </div>
              <div className="desaturated-logo">
                <img src="https://firebase.google.com/images/appmakers/todoist-gray_1x.png" srcset="https://firebase.google.com/images/appmakers/todoist-gray_1x.png 1x,https://firebase.google.com/images/appmakers/todoist-gray_2x.png 2x"/>
              </div>
          </div>
        </div>
      </section>
      <br/>

      <section className="firesite-row use-cases">
        <div className="firesite-row__inner">
          <div className="use-cases--desktop">
                <div className="full-usecase  has-support-image">


            <div classname="firesite-row-header expand-control">
              <div className="firesite-row-header__title">
                Crea un flujo de incorporación satisfactorio para tus tareas
              </div>
            </div>

            <div>
              <div className="full-usecase__main">
                <div className="full-usecase__content">
                  <div className="usecase-blurb">
                      <p><b>Usa Firebase&nbsp;Authentication para ofrecerles a los usuarios un proceso de acceso intuitivo y rápido.</b> Dales a los usuarios la opción de acceder con su cuenta de Facebook, Twitter, Google o Github. Te tomará menos de 5&nbsp;minutos de trabajo.</p>
                      <p><b>Haz un seguimiento de cada paso de tu flujo de incorporación para mejorar la experiencia.</b> Usa Firebase&nbsp;Analytics para registrar eventos en cada paso de tu flujo de incorporación, crea embudos para ver dónde abandonan los usuarios y usa Remote&nbsp;Config para hacer cambios en tu app y ver su efecto en las conversaciones.</p>
                  </div>

                  <div className="usecase-features">
                      <div className="feature">
                          <div className="firesite-feature-icon is-pillar-grow flat-icon">
                            <i className="gmp-icons"></i>
                          </div>


                        <div className="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div className="feature">
                          <div className="firesite-feature-icon is-pillar-grow flat-icon">
                            <i className="gmp-icons"></i>
                          </div>


                        <div className="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                      <div className="feature">
                          <div className="firesite-feature-icon  flat-icon">
                            <i className="gmp-icons"></i>
                          </div>


                        <div className="feature-name">
                        Authentication
                        </div>
                      </div>
                  </div>

                    <div className="support-study">
                      <img className="support-study___image" src="https://firebase.google.com/images/appmakers/fabulous.png"/>
                      <p className="support-study__quote">
                          <q>La retención entre los usuarios con un flujo de incorporación personalizado fue el doble en comparación con la de los usuarios comunes. Además, solo tardamos un día en implementar las pantallas de incorporación personalizadas.</q>
                          <cite>—Sami&nbsp;Ben&nbsp;Hassine, cofundador y director ejecutivo, The&nbsp;Fabulous</cite>
                      </p>
                    </div>

                  <div className="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/custom-onboarding" className="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="onboarding" data-label="learnMore">
                              Más información



        </a>
                  </div>
                </div>            <div className="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/onboarding_1x.png" srcset="https://firebase.google.com/images/usecases/onboarding_1x.png 1x,https://firebase.google.com/images/usecases/onboarding_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  " id="">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Personaliza una pantalla de bienvenida para usuarios anteriores
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Utiliza personalización para optimizar la experiencia de cada usuario.</b> Cuando un usuario abra la app, deléitalo con una pantalla inicial personalizada según sus preferencias, su historial de uso, su ubicación o su idioma.</p>
                      <p><b>Define públicos según el comportamiento de los usuarios y otras variables de Analytics.</b> Luego, usa Firebase Remote Config para mostrar el contenido específico para cada público definido. No es necesario enviar una nueva actualización de la app; puedes controlar el contenido y los públicos personalizados directamente desde Firebase&nbsp;console.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                  </div>


                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/welcome-screen" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="welcomeScreen" data-label="learnMore">
                              Más información
        </a>
                  </div>
                </div></div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  has-support-image new-features" id="new-features">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Implementa funciones nuevas de manera progresiva
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Launch your next feature with minimal risk.</b> The best way to release a new feature is to first test it on a few users to see how it works and how they respond. When you're happy with it, roll it out to the rest of your user base. If you need to disable it for some reason, there's no need to roll out a whole new app and wait for users to update.</p>
                      <p><b>Start by defining a small percentage of users as testers.</b> Use Google Analytics for Firebase and Remote Config to target a select group of users to test your new feature. Then, use Cloud Messaging to invite them to try it out. Track the results in Analytics. If all is well, roll it out to everyone else, or roll it back instantly from the Firebase console.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_cloud_messaging</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Messaging
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/onefootball.png"/>
                      <p class="support-study__quote">
                          <q>Probar las funciones con Firebase en primer lugar nos ayudó a aumentar la participación diaria de los usuarios en un 5%</q>
                          <cite>—Maxime Blanc-Strauss, director de productos, Onefootball</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/downloads/Firebase_One_Football_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="newFeatures" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de One&nbsp;Football
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/new-features_1x.png" srcset="https://firebase.google.com/images/usecases/new-features_1x.png 1x,https://firebase.google.com/images/usecases/new-features_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  has-support-image user-journey" id="user-journey">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Sigue el recorrido del usuario por distintos dispositivos
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Parece una obviedad decirlo, pero las personas usan las mismas apps en distintos dispositivos.</b> Un usuario puede mirar tu app en su dispositivo móvil, después abrirla en su laptop y volver a visitarla más tarde en su tablet. Los métodos de analítica básicos pueden interpretar esto como tres usuarios diferentes, lo que infla los índices de renovación.</p>
                      <p><b>Usa datos de distintos dispositivos para comprender a tus usuarios en profundidad.</b> Firebase&nbsp;Analytics te permite exportar datos de tu app para dispositivos móviles (iOS y Android) a BigQuery y utilizar una búsqueda en UserID para tener una imagen completa de la participación en la app en distintos canales y dispositivos.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">

                          <div class="image-icon bigquery">
                            <img src="https://firebase.google.com/images/usecases/google-bigquery-icon.png"/>
                          </div>

                        <div class="feature-name">
                        Big&nbsp;Query
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/npr.png"/>
                      <p class="support-study__quote">
                          <q>Firebase es una herramienta increíblemente potente con muchas funciones: Remote&nbsp;Config, Analytics, BigQuery y mucho más, que nos ayudan a tener objetivos y estadísticas más inteligentes, todo en el mismo conjunto.</q>
                          <cite>—Tejas Mistry, product manager, NPR</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/user-journey" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="userJourney" data-label="learnMore">
                              Más información
        </a>
        <a href="https://firebase.google.com/downloads/Firebase_NPR_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="userJourney" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de NPR
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/user-journey_1x.png" srcset="https://firebase.google.com/images/usecases/user-journey_1x.png 1x,https://firebase.google.com/images/usecases/user-journey_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  has-support-image chat-features" id="chat-features">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Agrega chat a tu app
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Permite que los usuarios chateen entre sí sin abandonar tu app.</b> Los chats dentro de la app son una excelente manera de aumentar la participación, pero implementar un chat fácil de usar puede ser difícil.</p>
                      <p><b>Sincroniza los mensajes del chat entre millones de usuarios con Firebase&nbsp;Realtime&nbsp;Database.</b> Autentica sin problemas con Firebase&nbsp;Authentication y después configura una sala de chat en Realtime&nbsp;Database. Los mensajes aparecen en los dispositivos de todos los usuarios en tiempo real. Usa Firebase&nbsp;Cloud&nbsp;Messaging para enviar notificaciones, a fin de que los usuarios reciban mensajes nuevos si están en otra app.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_cloud_messaging</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Messaging
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_auth</i>
                          </div>


                        <div class="feature-name">
                        Authentication
                        </div>
                      </div>
                  </div>


                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/chat-features_1x.png" srcset="https://firebase.google.com/images/usecases/chat-features_1x.png 1x,https://firebase.google.com/images/usecases/chat-features_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  has-support-image ads" id="ads">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Optimize ads based on user behavior
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Cada usuario necesita una estrategia de monetización diferente.</b> A partir de los datos demográficos o el comportamiento de los usuarios, crea listas de público personalizadas para segmentar a los usuarios entre compradores de bajo y alto potencial. Vincula tu proyecto de Firebase con AdMob para obtener una imagen completa de cuánto vale cada público para ti.</p>
                      <p><b>Crea la experiencia de anuncios adecuada para los usuarios indicados.</b> Con Firebase&nbsp;Remote&nbsp;Config y las listas de público personalizadas, puedes definir si un usuario ve más o menos anuncios dentro de tu app. Vincula tu proyecto de Firebase con AdMob para medir el efecto de la experiencia de anuncios personalizada en el valor del ciclo de vida del público.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_admob</i>
                          </div>


                        <div class="feature-name">
                        AdMob
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/playbuzz.png"/>
                      <p class="support-study__quote">
                          <q>Firebase liberó completamente a nuestros ingenieros de la tarea de administrar la infraestructura de campaña, ayudó a nuestro equipo a ser más eficaz y contribuyó al rendimiento de nuestras campañas, lo que fue un gran beneficio para nosotros.</q>
                          <cite>—Eran&nbsp;Orlev, director de productos para dispositivos móviles, Playbuzz</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/downloads/Firebase_Playbuzz_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="ads" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de Playbuzz
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/ads_1x.png" srcset="https://firebase.google.com/images/usecases/ads_1x.png 1x,https://firebase.google.com/images/usecases/ads_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  " id="">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Permite a los usuarios compartir fotos y cambiar su tamaño
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Aumenta la participación en la app con el uso compartido entre pares.</b> Usa Firebase&nbsp;Storage para alojar las fotos de los usuarios en la nube con rapidez y seguridad, y después registra las rutas de acceso a los archivos en Realtime&nbsp;Database para habilitar el uso compartido.</p>
                      <p><b>Asegúrate de que solo los usuarios indicados puedan ver las fotos.</b> Las reglas de seguridad de Firebase funcionan con Realtime&nbsp;Database para garantizar que solo las personas indicadas puedan ver las fotos que comparte cada usuario.</p>
                      <p><b>Cambia el tamaño de las imágenes de forma automática cuando se suben.</b> Cloud&nbsp;Functions para Firebase te permite mantener el nivel de detalle original de la foto del creador sin obligar a los usuarios a descargar la imagen completa (lo que puede consumir muchos datos). Cloud&nbsp;Functions se ejecuta en Google&nbsp;Cloud&nbsp;Platform, por lo que no hay servidores para administrar.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_storage</i>
                          </div>


                        <div class="feature-name">
                        Storage
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_functions</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Functions
                        </div>
                      </div>
                  </div>


                </div></div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  has-support-image payments" id="payments">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Procesa pagos de terceros, sin necesidad de un servidor
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Cuando los usuarios hacen compras directas desde la aplicación, esperan velocidad y seguridad.</b> Muchos servicios de terceros te permiten procesar pagos, lo que elimina la complejidad innecesaria. Firebase optimiza aún más la experiencia, ya que te permite llamar a estas API de pago de forma segura y sin configurar tus propios servidores.</p>
                      <p><b>Ayuda a tus clientes a completar pagos en milisegundos.</b> Cuando un usuario llega a la pantalla de pago de tu app, recopilas su información de pago actualizada y la envías a Cloud&nbsp;Functions para Firebase. Luego, puedes procesar su pago mediante solicitudes a una API de procesamiento de pagos externa mediante HTTPS, escribir la orden en la base de datos en tiempo real y mostrar un mensaje de confirmación al usuario cuando se complete la operación. Todo esto se hace de manera segura y sin necesidad de administrar servidores.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_functions</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Functions
                        </div>
                      </div>
                  </div>


                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/payments" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="payments" data-label="learnMore">
                              Más información
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/payments_1x.png" srcset="https://firebase.google.com/images/usecases/payments_1x.png 1x,https://firebase.google.com/images/usecases/payments_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase  " id="">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Reward your referrals
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Referrals are a highly effective way of driving growth.</b> Your users are going to value their friends’ recommendations far more highly than any marketing that you do. Firebase Dynamic Links makes it easy for you to create a referral system in your app, opening up a large potential growth vector for your product.</p>
                      <p><b>Reward users for referring friends.</b> Using Realtime Database and Cloud Functions for Firebase, you can set up in-app rewards for successful referrals. Invitation links work across platforms and referrals receive a custom first-time experience that you design. You can also delay granting rewards to the referral, the referrer, or both until a specific introductory task is completed.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_durable_links</i>
                          </div>


                        <div class="feature-name">
                        Dynamic&nbsp;Links
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_functions</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Functions
                        </div>
                      </div>
                  </div>


                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/dynamic-links/use-cases/rewarded-referral" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="referrals" data-label="learnMore">
                              Más información
        </a>
                  </div>
                </div></div>
            </div>
          </div>



          </div>
          <div class="use-cases--mobile">
                <div class="full-usecase expandable has-support-image onboarding" id="onboarding">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Crea un flujo de incorporación satisfactorio
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Usa Firebase&nbsp;Authentication para ofrecerles a los usuarios un proceso de acceso intuitivo y rápido.</b> Dales a los usuarios la opción de acceder con su cuenta de Facebook, Twitter, Google o Github. Te tomará menos de 5&nbsp;minutos de trabajo.</p>
                      <p><b>Haz un seguimiento de cada paso de tu flujo de incorporación para mejorar la experiencia.</b> Usa Firebase&nbsp;Analytics para registrar eventos en cada paso de tu flujo de incorporación, crea embudos para ver dónde abandonan los usuarios y usa Remote&nbsp;Config para hacer cambios en tu app y ver su efecto en las conversaciones.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_auth</i>
                          </div>


                        <div class="feature-name">
                        Authentication
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/fabulous.png"/>
                      <p class="support-study__quote">
                          <q>La retención entre los usuarios con un flujo de incorporación personalizado fue el doble en comparación con la de los usuarios comunes. Además, solo tardamos un día en implementar las pantallas de incorporación personalizadas.</q>
                          <cite>—Sami&nbsp;Ben&nbsp;Hassine, cofundador y director ejecutivo, The&nbsp;Fabulous</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/custom-onboarding" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="onboarding" data-label="learnMore">
                              Más información
        </a>
        <a href="https://firebase.google.com/downloads/Firebase_Fabulous_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="onboarding" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de Fabulous
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/onboarding_1x.png" srcset="https://firebase.google.com/images/usecases/onboarding_1x.png 1x,https://firebase.google.com/images/usecases/onboarding_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable " id="">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Personaliza una pantalla de bienvenida para usuarios anteriores
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Utiliza personalización para optimizar la experiencia de cada usuario.</b> Cuando un usuario abra la app, deléitalo con una pantalla inicial personalizada según sus preferencias, su historial de uso, su ubicación o su idioma.</p>
                      <p><b>Define públicos según el comportamiento de los usuarios y otras variables de Analytics.</b> Luego, usa Firebase Remote Config para mostrar el contenido específico para cada público definido. No es necesario enviar una nueva actualización de la app; puedes controlar el contenido y los públicos personalizados directamente desde Firebase&nbsp;console.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                  </div>


                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/welcome-screen" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="welcomeScreen" data-label="learnMore">
                              Más información
        </a>
                  </div>
                </div></div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable has-support-image new-features" id="new-features">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Implementa funciones nuevas de manera progresiva
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Launch your next feature with minimal risk.</b> The best way to release a new feature is to first test it on a few users to see how it works and how they respond. When you're happy with it, roll it out to the rest of your user base. If you need to disable it for some reason, there's no need to roll out a whole new app and wait for users to update.</p>
                      <p><b>Start by defining a small percentage of users as testers.</b> Use Google Analytics for Firebase and Remote Config to target a select group of users to test your new feature. Then, use Cloud Messaging to invite them to try it out. Track the results in Analytics. If all is well, roll it out to everyone else, or roll it back instantly from the Firebase console.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_cloud_messaging</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Messaging
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/onefootball.png"/>
                      <p class="support-study__quote">
                          <q>Probar las funciones con Firebase en primer lugar nos ayudó a aumentar la participación diaria de los usuarios en un 5%</q>
                          <cite>—Maxime Blanc-Strauss, director de productos, Onefootball</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/downloads/Firebase_One_Football_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="newFeatures" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de One&nbsp;Football
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/new-features_1x.png" srcset="https://firebase.google.com/images/usecases/new-features_1x.png 1x,https://firebase.google.com/images/usecases/new-features_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable has-support-image user-journey" id="user-journey">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Sigue el recorrido del usuario por distintos dispositivos
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Parece una obviedad decirlo, pero las personas usan las mismas apps en distintos dispositivos.</b> Un usuario puede mirar tu app en su dispositivo móvil, después abrirla en su laptop y volver a visitarla más tarde en su tablet. Los métodos de analítica básicos pueden interpretar esto como tres usuarios diferentes, lo que infla los índices de renovación.</p>
                      <p><b>Usa datos de distintos dispositivos para comprender a tus usuarios en profundidad.</b> Firebase&nbsp;Analytics te permite exportar datos de tu app para dispositivos móviles (iOS y Android) a BigQuery y utilizar una búsqueda en UserID para tener una imagen completa de la participación en la app en distintos canales y dispositivos.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">

                          <div class="image-icon bigquery">
                            <img src="https://firebase.google.com/images/usecases/google-bigquery-icon.png"/>
                          </div>

                        <div class="feature-name">
                        Big&nbsp;Query
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/npr.png"/>
                      <p class="support-study__quote">
                          <q>Firebase es una herramienta increíblemente potente con muchas funciones: Remote&nbsp;Config, Analytics, BigQuery y mucho más, que nos ayudan a tener objetivos y estadísticas más inteligentes, todo en el mismo conjunto.</q>
                          <cite>—Tejas Mistry, product manager, NPR</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/user-journey" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="userJourney" data-label="learnMore">
                              Más información
        </a>
        <a href="https://firebase.google.com/downloads/Firebase_NPR_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="userJourney" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de NPR
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/user-journey_1x.png" srcset="https://firebase.google.com/images/usecases/user-journey_1x.png 1x,https://firebase.google.com/images/usecases/user-journey_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable has-support-image chat-features" id="chat-features">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Agrega chat a tu app
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Permite que los usuarios chateen entre sí sin abandonar tu app.</b> Los chats dentro de la app son una excelente manera de aumentar la participación, pero implementar un chat fácil de usar puede ser difícil.</p>
                      <p><b>Sincroniza los mensajes del chat entre millones de usuarios con Firebase&nbsp;Realtime&nbsp;Database.</b> Autentica sin problemas con Firebase&nbsp;Authentication y después configura una sala de chat en Realtime&nbsp;Database. Los mensajes aparecen en los dispositivos de todos los usuarios en tiempo real. Usa Firebase&nbsp;Cloud&nbsp;Messaging para enviar notificaciones, a fin de que los usuarios reciban mensajes nuevos si están en otra app.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_cloud_messaging</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Messaging
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_auth</i>
                          </div>


                        <div class="feature-name">
                        Authentication
                        </div>
                      </div>
                  </div>


                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/chat-features_1x.png" srcset="https://firebase.google.com/images/usecases/chat-features_1x.png 1x,https://firebase.google.com/images/usecases/chat-features_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable has-support-image ads" id="ads">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Optimize ads based on user behavior
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Cada usuario necesita una estrategia de monetización diferente.</b> A partir de los datos demográficos o el comportamiento de los usuarios, crea listas de público personalizadas para segmentar a los usuarios entre compradores de bajo y alto potencial. Vincula tu proyecto de Firebase con AdMob para obtener una imagen completa de cuánto vale cada público para ti.</p>
                      <p><b>Crea la experiencia de anuncios adecuada para los usuarios indicados.</b> Con Firebase&nbsp;Remote&nbsp;Config y las listas de público personalizadas, puedes definir si un usuario ve más o menos anuncios dentro de tu app. Vincula tu proyecto de Firebase con AdMob para medir el efecto de la experiencia de anuncios personalizada en el valor del ciclo de vida del público.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_analytics</i>
                          </div>


                        <div class="feature-name">
                        Analytics
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_config</i>
                          </div>


                        <div class="feature-name">
                        Remote&nbsp;Config
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_admob</i>
                          </div>


                        <div class="feature-name">
                        AdMob
                        </div>
                      </div>
                  </div>

                    <div class="support-study">
                      <img class="support-study___image" src="https://firebase.google.com/images/appmakers/playbuzz.png"/>
                      <p class="support-study__quote">
                          <q>Firebase liberó completamente a nuestros ingenieros de la tarea de administrar la infraestructura de campaña, ayudó a nuestro equipo a ser más eficaz y contribuyó al rendimiento de nuestras campañas, lo que fue un gran beneficio para nosotros.</q>
                          <cite>—Eran&nbsp;Orlev, director de productos para dispositivos móviles, Playbuzz</cite>
                      </p>
                    </div>

                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/downloads/Firebase_Playbuzz_Case_Study.pdf" class="firesite-button button button-white download-button is-hero gc-analytics-event" target="_blank" data-category="useCases" data-action="ads" data-label="downloadCaseStudy">
                              <i class="material-icons">file_download</i>
                        Caso de éxito de Playbuzz
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/ads_1x.png" srcset="https://firebase.google.com/images/usecases/ads_1x.png 1x,https://firebase.google.com/images/usecases/ads_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable " id="">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Permite a los usuarios compartir fotos y cambiar su tamaño
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Aumenta la participación en la app con el uso compartido entre pares.</b> Usa Firebase&nbsp;Storage para alojar las fotos de los usuarios en la nube con rapidez y seguridad, y después registra las rutas de acceso a los archivos en Realtime&nbsp;Database para habilitar el uso compartido.</p>
                      <p><b>Asegúrate de que solo los usuarios indicados puedan ver las fotos.</b> Las reglas de seguridad de Firebase funcionan con Realtime&nbsp;Database para garantizar que solo las personas indicadas puedan ver las fotos que comparte cada usuario.</p>
                      <p><b>Cambia el tamaño de las imágenes de forma automática cuando se suben.</b> Cloud&nbsp;Functions para Firebase te permite mantener el nivel de detalle original de la foto del creador sin obligar a los usuarios a descargar la imagen completa (lo que puede consumir muchos datos). Cloud&nbsp;Functions se ejecuta en Google&nbsp;Cloud&nbsp;Platform, por lo que no hay servidores para administrar.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_storage</i>
                          </div>


                        <div class="feature-name">
                        Storage
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_functions</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Functions
                        </div>
                      </div>
                  </div>


                </div></div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable has-support-image payments" id="payments">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Procesa pagos de terceros, sin necesidad de un servidor
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Cuando los usuarios hacen compras directas desde la aplicación, esperan velocidad y seguridad.</b> Muchos servicios de terceros te permiten procesar pagos, lo que elimina la complejidad innecesaria. Firebase optimiza aún más la experiencia, ya que te permite llamar a estas API de pago de forma segura y sin configurar tus propios servidores.</p>
                      <p><b>Ayuda a tus clientes a completar pagos en milisegundos.</b> Cuando un usuario llega a la pantalla de pago de tu app, recopilas su información de pago actualizada y la envías a Cloud&nbsp;Functions para Firebase. Luego, puedes procesar su pago mediante solicitudes a una API de procesamiento de pagos externa mediante HTTPS, escribir la orden en la base de datos en tiempo real y mostrar un mensaje de confirmación al usuario cuando se complete la operación. Todo esto se hace de manera segura y sin necesidad de administrar servidores.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_functions</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Functions
                        </div>
                      </div>
                  </div>


                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/use-cases/payments" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="payments" data-label="learnMore">
                              Más información
        </a>
                  </div>
                </div>            <div class="full-usecase__image">
                    <img src="https://firebase.google.com/images/usecases/payments_1x.png" srcset="https://firebase.google.com/images/usecases/payments_1x.png 1x,https://firebase.google.com/images/usecases/payments_2x.png 2x"/>
                  </div>
      </div>
            </div>
          </div>

            <div class="firesite-row__separator"></div>

          <div class="full-usecase expandable " id="">


            <div class="firesite-row-header expand-control">
              <div class="firesite-row-header__title">
                Reward your referrals
                  <i class="material-icons collapser open">keyboard_arrow_down</i>
                  <i class="material-icons collapser close">keyboard_arrow_up</i>
              </div>
            </div>

            <div>
              <div class="full-usecase__main">
                <div class="full-usecase__content">
                  <div class="usecase-blurb">
                      <p><b>Referrals are a highly effective way of driving growth.</b> Your users are going to value their friends’ recommendations far more highly than any marketing that you do. Firebase Dynamic Links makes it easy for you to create a referral system in your app, opening up a large potential growth vector for your product.</p>
                      <p><b>Reward users for referring friends.</b> Using Realtime Database and Cloud Functions for Firebase, you can set up in-app rewards for successful referrals. Invitation links work across platforms and referrals receive a custom first-time experience that you design. You can also delay granting rewards to the referral, the referrer, or both until a specific introductory task is completed.</p>
                  </div>

                  <div class="usecase-features">
                      <div class="feature">
                          <div class="firesite-feature-icon is-pillar-grow flat-icon">
                            <i class="gmp-icons">gmp_durable_links</i>
                          </div>


                        <div class="feature-name">
                        Dynamic&nbsp;Links
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_database</i>
                          </div>


                        <div class="feature-name">
                        Realtime&nbsp;Database
                        </div>
                      </div>
                      <div class="feature">
                          <div class="firesite-feature-icon  flat-icon">
                            <i class="gmp-icons">gmp_functions</i>
                          </div>


                        <div class="feature-name">
                        Cloud&nbsp;Functions
                        </div>
                      </div>
                  </div>


                  <div class="firesite-row__buttons">
        <a href="https://firebase.google.com/docs/dynamic-links/use-cases/rewarded-referral" class="firesite-button is-hero is-raised gc-analytics-event" data-category="useCases" data-action="referrals" data-label="learnMore">
                              Más información
        </a>
                  </div>
                </div></div>
            </div>
          </div>



          </div>

        </div>
      </section>





















</div>





    );
  }
}
export default Uso;
