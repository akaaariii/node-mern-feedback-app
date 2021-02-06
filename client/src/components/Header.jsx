import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Payment from './Payment'

const Header = ({auth}) => {

  const [userState, setUserState] = useState(null);

  useEffect(() => {
    // console.log(auth);
    setUserState(auth);
  }, [auth])

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={ userState ? "/surveys" : "/" } className="left brand-logo">
          Emeruly
        </Link>

        <ul className="right">
          {userState ? (
            <>
              <li><Payment /></li>
              <li style={{margin: '0 10px'}}>Credits: {auth.credits}</li>
              <li><a href="/api/auth/logout">Logout</a></li>
            </>
          ) : (
            <li><a href="/api/auth/google">Login with Google</a></li>
          )
          }
        </ul>
      </div>
    </nav>
  )
}

// const mapStateToProps = (state) => {
//   return { auth: state.auth.user }
// }
const mapStateToProps = ({ auth: { user } }) => {
  return { auth: user }
}

export default connect(mapStateToProps)(Header)
