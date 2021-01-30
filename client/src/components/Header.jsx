import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          Emeruly
        </Link>

        <ul className="right">
          <a href="/api/auth/google">Login with Google</a>
        </ul>
      </div>
    </nav>
  )
}

export default Header
