import React from 'react'

import logo from './images/logo_header.png'

const Header = () => (
  <header className="header">
    <div className="container">
      <img className="header__logo" src={logo} alt=""/>
      <h1 className="header__title">Patient Medical Records</h1>
    </div>
  </header>
)

export default Header