import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='nav-wrapper cyan darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'> BudgetQL </Link>
        <ul className='right'>
          <li>
            <Link to='/signIn'> SignIn </Link>
          </li>
          <li>
            <Link to='/signUp'> SignUp </Link>
          </li>
          <li>
            <Link to='/dashboard'> Dashboard </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
