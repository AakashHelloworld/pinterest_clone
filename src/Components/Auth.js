import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {Navbardefault} from "./NavbarDefault/NavbarDefault"
import { HomeDefault } from './HomeDefault/HomeDefault'

const Auth =({children})=>{
    const authenticated=useSelector(state=>state.status)

  return (
    <>
        {
            authenticated?(<>{children}</>):(
                <>
                  <Navbardefault/>
                  <HomeDefault/>
                </>
            )
        }
    </>
  )
}

export default Auth