import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
export default class Home extends Component {
  render () {
    return (
      <div className='wrapper'>
        <div className='wrapper__centered'>
          <h3>Welcome to budget planer </h3>
          <p classname='quote'>
            "A budget tells us what we can't afford, but it doesn't keep us from buying it."
          </p>
          <div className='wrapper__buttons'>
            <Link className='waves-effect waves-light btn cyan darken-3' to='/signIn'> Sign In </Link>
            <Link className='waves-effect waves-light btn cyan darken-3' to='/signUp'> Create Account </Link>
          </div>
        </div>
      </div>
    )
  }
}
