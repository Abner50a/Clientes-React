import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import Home from "./views/Home";
import Registrarse from "./views/Registrarse";
import Descripcion from "./views/Descripcion";
import Login from "./views/Login";

const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/"/>;
}


export default function Routes() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/registrarse" component={Registrarse}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/producto/:id" component={Descripcion} />
            <Route exact path="/logout" component={Logout}/>
        </Switch>
    </Router>
    );
}