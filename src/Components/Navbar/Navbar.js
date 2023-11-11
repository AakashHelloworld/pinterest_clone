import React from 'react'
import style from "./Navbar.module.css"
import logo from "../../Assets/logo.jpg"
import {ImSearch} from "react-icons/im"
import {AiFillMessage} from "react-icons/ai"
import {MdNotificationsActive} from "react-icons/md"
import {ImCross} from "react-icons/im"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const [input, setinput] = React.useState('')
    const navigate = useNavigate();
    const userName=useSelector(state=>state.userName)
    const userId =useSelector(state=>state.id)
    const [inputactive, setinputactive] = React.useState(true)

  return (
    <div className={style.navbar}>
    {/* logo */}
        <div className={style.logoContainer}>
            <img className={style.logo} src={logo} alt="logo"     onClick={() => navigate('/')} />
        </div>

    {/* buttons */}
        <div>
            <button className={style.homebutton}
            onClick={() => navigate('/')}
            >Home</button>
            <button className={style.createbutton} onClick={() => navigate('create')}>Create</button>
        </div>

    {/* search */}

    <div className={style.searchContainer} >
        <div className={!inputactive?style.searchBoxactive :style.searchBox}>
        { inputactive &&
        <ImSearch className={style.searchIcon} />
        }
        <input value={input} onChange={(e) => setinput(e.target.value)} className={style.search} type='text' placeholder='Search'
        onFocus={() => setinputactive(false)} />

        {!inputactive &&
        <ImCross className={style.searchIcon} onClick={() => {
            console.log("d")
            setinput('')
            setinputactive(true)
            }}/>
        }
        </div>

    </div>

    {/* profile */}

        <div className={style.profileContainer}>
            <MdNotificationsActive className={style.notificationIcon}/>
            <AiFillMessage className={style.messageIcon} />
            <div className={style.profile} onClick={() => navigate(`/user/${userId}`)}>
                    <span >{ userName[0]}</span>
            </div>
        </div>


    </div>
  )
}
