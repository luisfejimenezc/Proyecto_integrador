import React from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'

import Logo from "../../assets/images/logo.png"
import './header.css'



const nav links=[
  {
    path:'/home', 
    display:'Home',
  },
  {
    path: "/about",
    display:'About'
  },
  {
    path: '/tours'
    display:'Tours'
  },
]

const header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/*======================logo======================== */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
            {/***************************************************** */}
            
            {/***************************************************** */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
            {nav__links.map((items, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={items.path}
                  className={navClass =>
                    navClass.isActive ? "active__link" : ""
                  }
                >
                  {items.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__right d-flex align-iteems-center gap-4">
          <div className="nav__btns d-flex align-iteems-center gap-4">
              <button className="btn secundary__btn"><link to='/login'>Login</link></button>
              <button className="btn primary__btn"><link to='/register'>Register</link></button>
              </div>
              
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default header
