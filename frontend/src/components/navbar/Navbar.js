import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'> Home </Link>
        <Link to='/signIn' className='brand-logo'> SignIn </Link>
        <Link to='/signUp' className='brand-logo'> SignUp </Link>
        <Link to='/dashboard' className='brand-logo'> Dashboard </Link>
      </div>
    </nav>
  )
}

export default Navbar
