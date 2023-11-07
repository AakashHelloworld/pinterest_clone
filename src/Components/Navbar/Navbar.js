import React from 'react'
import style from "./Navbar.module.css"
import logo from "../../Assets/logo.jpg"
import {ImSearch} from "react-icons/im"
import {AiFillMessage} from "react-icons/ai"
import {MdNotificationsActive} from "react-icons/md"
import {ImCross} from "react-icons/im"
import { useSelector } from 'react-redux'
export const Navbar = () => {
    const userName=useSelector(state=>state.userName)
    const [inputactive, setinputactive] = React.useState(true)

  return (
    <div className={style.navbar}>
    {/* logo */}
        <div className={style.logoContainer}>
            <img className={style.logo} src={logo} alt="logo" />
        </div>

    {/* buttons */}
        <div>
            <button className={style.homebutton}>Home</button>
            <button className={style.createbutton}>Create</button>
        </div>

    {/* search */}

    <div className={style.searchContainer}>
        <div className={!inputactive?style.searchBoxactive :style.searchBox}>
        { inputactive &&
        <ImSearch className={style.searchIcon} />
        }
        <input className={style.search} type='text' placeholder='Search'
        onFocus={() => setinputactive(false)} onBlur={() => setinputactive(true)} />

        {!inputactive &&
        <ImCross className={style.searchIcon} />
        }
        </div>

    </div>

    {/* profile */}

        <div className={style.profileContainer}>
            <MdNotificationsActive className={style.notificationIcon}/>
            <AiFillMessage className={style.messageIcon} />
            <div className={style.profile}>
                    <span>{ userName[0]}</span>
            </div>
        </div>


    </div>
  )
}
