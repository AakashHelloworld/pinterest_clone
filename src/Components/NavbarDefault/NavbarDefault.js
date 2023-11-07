import React from 'react'
import logo from "../../Assets/logo.jpg"
import style from "./Navbar.module.css"
export const Navbardefault = () => {
  return (
    <nav className={style.navbar}>
            <img className={style.logo} src={logo} alt='logo' />
    </nav>
  )
}

