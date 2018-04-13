import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Nosotros from './components/nosotros/Nosotros';
import Bootcamp from './components/bootcamp/Bootcamp';
import Aply from "./components/bootcamp/Aply";
import Login from './components/login/Login';
import Perfil from './components/perfil/Perfil';
import PayForm from './components/payform/PayForm';
import CursosConteiner from './components/cursos/CursosConteiner';
import Contacto from './components/contacto/Contacto';
import Politicas from './components/politicas/Politicas';
import Servicios from './components/servicios/Servicios';
import Uso from './components/uso/Uso';
import Precios from './components/precios/Precios';
import Tareas from './components/tareas/Tareas';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/bootcamp" component={Bootcamp} />
        <Route path="/aply" component={Aply} />
        <Route path="/login" component={Login} />
        <Route path="/pay" component={PayForm} />
        <Route path="/cursos" component={CursosConteiner} />
        <Route path="/contacto" component={Contacto}/>
        <Route path="/politicas-de-privacidad" component={Politicas} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/uso" component={Uso} />
        <Route path="/precios" component={Precios} />
        <Route path="/tareas" component={Tareas} />
    </Switch>
);
