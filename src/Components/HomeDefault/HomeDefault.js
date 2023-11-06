import React from 'react'
import style from './HomeDefault.module.css'
export const HomeDefault = () => {
  return (
    <div className={style.homepage}>
        <div className={style.text}>
            <h1 className={style.heading}>sign up to<br/> get your <br/>ideas</h1>
        </div>

        <div className={style.form}>
            <div>
                <h2>Welcome to Pinterest</h2>
                <p>Find new ideas</p>
            </div>

            <div>
                <button className={style.google}>Authication with google</button>
            </div>


        </div>
    </div>
  )
}
