import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// components
import Navbar from './components/navbar/Navbar'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import Home from './views/Home'
import Dashboard from './views/Dashboard'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
