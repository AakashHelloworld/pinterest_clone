import React from 'react'
import style from './Loading.module.css'
export const Loading = () => {
  return (
    <div className={style.loading}>
        <div class={style.profileMainLoader}>
          <div class={style.loader}>
            <svg class={style.circularLoader} viewBox="25 25 50 50" >
              <circle class={style.loaderPath} cx="50" cy="50" r="20" fill="none" stroke="#70c542" stroke-width="2" />
            </svg>
          </div>
        </div>
    </div>
  )
}
