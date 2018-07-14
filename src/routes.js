import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Login from './components/login/Login';
import Contacto from './components/contacto/Contacto';
import Uso from './components/uso/Uso';
import Precios from './components/precios/Precios';
import Tareas from './components/tareas/CalendarContainer';

export const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route path="/login" component={Login} />
      <Route path="/contacto" component={Contacto}/>
      <Route path="/uso" component={Uso} />
      <Route path="/precios" component={Precios} />
      <Route path="/tareas" component={Tareas} />
    </Switch>
);
