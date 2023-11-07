import React from 'react'
import style from './HomeDefault.module.css'
import { authwithGoogle } from '../../Appwrite/auth'
export const HomeDefault = () => {

    const authHandler = async () => {
        const response = await authwithGoogle()
        console.log(response)
    }

  return (
    <div className={style.homepage}>
        <div className={style.text}>
            <h1 className={style.heading}>Sign up to<br/> get your <br/>ideas</h1>
        </div>

        <div className={style.form}>
            <div>
                <h2>Welcome to Pinterest</h2>
                <p>Find new ideas</p>
            </div>

            <div>
                <button className={style.google} onClick={authHandler}>Authication with google</button>
            </div>


        </div>
        <div className={style.homepageBackground}>

        </div>
    </div>
  )
}
