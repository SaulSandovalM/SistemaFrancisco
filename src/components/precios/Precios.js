import React, { Component } from 'react';
import './Precios.css';
import {Link} from 'react-router-dom';

class Precios extends Component {
  componentWillMount(){}

  componentDidMount () {
      window.scroll(0, 0)
  }

  render() {
    return (
      <div>

      <section className="firesite-row">
        <div className="firesite-row__inner">
          <div className="firesite-page-header">
            <div className="firesite-page-header__title">
              Comienza gratis
            </div>
            <div className="firesite-page-header__tagline">
              Comienza gratis, ajusta la escala y paga solo por lo que usas.
            </div>
          </div>
        </div>
      </section>

      <section className="firesite-row">
        <div className="firesite-row__inner">
          <div className="devsite-table-wrapper">
            <table className="firesite-pricing-table">
              <thead className="firesite-pricing-table__header">
                <tr>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--products">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">&nbsp;</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">&nbsp;</span>
                    <p className="firesite-pricing-table__header__cell__title">Productos</p>
                  </th>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--spark">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">Plan Bimestral</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">Todos los servicios</span>
                    <p className="firesite-pricing-table__header__cell__title2">MXN $250/Bimestral</p>
                  </th>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--flame">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark">Plan Semestral</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">Todos los servicios</span>
                    <p className="firesite-pricing-table__header__cell__title2">MXN $550/Semestral</p>
                  </th>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--blaze">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark">Plan Anual</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">Todos los servicios</span>
                    <p className="firesite-pricing-table__header__cell__title2">MXN $1000/Anualidad</p>
                  </th>
                </tr>
              </thead>
              <thead className="firesite-pricing-table__header">
                <tr>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--products">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">&nbsp;</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">&nbsp;</span>
                    <h4 className="firesite-pricing-table__body__cell__title">Incluido sin cargo</h4>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                </tr>
              </thead>
              <thead className="firesite-pricing-table__header">
                <tr>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--products">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">&nbsp;</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">&nbsp;</span>
                    <h4 className="firesite-pricing-table__body__cell__title">Incluido sin cargo</h4>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                </tr>
              </thead>
              <thead className="firesite-pricing-table__header">
                <tr>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--products">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">&nbsp;</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">&nbsp;</span>
                    <h4 className="firesite-pricing-table__body__cell__title">Incluido sin cargo</h4>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                </tr>
              </thead>
              <thead className="firesite-pricing-table__header">
                <tr>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--products">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">&nbsp;</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">&nbsp;</span>
                    <h4 className="firesite-pricing-table__body__cell__title">Incluido sin cargo</h4>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                  <th className="firesite-pricing-table__header__cell">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark"></h3>
                    <span className="firesite-pricing-table__header__cell__plan-description"></span>
                    <p className="firesite-pricing-table__header__cell__title"></p>
                  </th>
                </tr>
              </thead>
              <thead className="firesite-pricing-table__header">
                <tr>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--products">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">&nbsp;</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">&nbsp;</span>
                    <p className="firesite-pricing-table__header__cell__title">Selecciona un plan</p>
                  </th>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--spark">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">Plan Bimestral</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">Todos los servicios</span>
                    <p className="firesite-pricing-table__header__cell__title2">MXN $250/Bimestral</p>
                    <div className="firesite-button is-hero is-white">
                      Comenzar ahora
                    </div>
                  </th>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--flame">
                    <h3 className="firesite-pricing-table__header__cell__plan-name">Plan Anual</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">Todos los servicios</span>
                    <p className="firesite-pricing-table__header__cell__title2">MXN $550/Semestral</p>
                    <div className="firesite-button is-hero is-white">
                      Comenzar ahora
                    </div>
                  </th>
                  <th className="firesite-pricing-table__header__cell firesite-pricing-table__header__cell--blaze">
                    <h3 className="firesite-pricing-table__header__cell__plan-name" id="plan-spark">Plan Anual</h3>
                    <span className="firesite-pricing-table__header__cell__plan-description">Todos los servicios</span>
                    <p className="firesite-pricing-table__header__cell__title2">MXN $1000/Anualidad</p>
                    <div className="firesite-button is-hero is-white">
                      Comenzar ahora
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </section>

      </div>
    );
  }
}

export default Precios;
