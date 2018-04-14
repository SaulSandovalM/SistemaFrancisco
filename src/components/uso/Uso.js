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

      <div class="firesite-row__inner see-features">
    <div class="firesite-row-header__title">
      Explora cada una de nuestras potentes herramientas listas para usar.
    </div>
    <div class="full-usecase__main">
      <div class="full-usecase__content">
        <div class="usecase-blurb">
            <p><b>Usa Tini&nbsp;Authentication para ofrecerles a los usuarios un proceso de acceso intuitivo y rápido.</b> Dales a los usuarios la opción de acceder con su cuenta de Facebook, Twitter, Google . Te tomará menos de 5&nbsp;minutos de trabajo.</p>
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
          <img src="https://firebase.google.com/images/usecases/onboarding_1x.png" srcset="https://firebase.google.com/images/usecases/onboarding_1x.png 1x,https://firebase.google.com/images/usecases/onboarding_2x.png 2x"/
          >
        </div>
</div>
  </div>





















</div>





    );
  }
}
export default Uso;
