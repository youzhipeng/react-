import React,{Component} from 'react'
import {
    Route,
    HashRouter,
    Redirect,
    Switch
} from 'react-router-dom'
import Dashboard from '../views/Dashboard'
import Login from '../views/login/Login'
export default class App extends Component{
    render() {
        return(
            // <div>
              <HashRouter>
                  <Switch>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/" render={() => 
                      localStorage.getItem('token') ? <Dashboard/> :<Redirect to= "/login"/>
                  }></Route>
                  </Switch>
              </HashRouter>
            // </div>
        )
    }
}