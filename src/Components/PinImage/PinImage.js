import React, { useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import style from "./PinImage.module.css"
import {FiArrowLeft} from "react-icons/fi"
export const PinImage = () => {
  const {id} = useParams();
  const [image, setImage] = React.useState("")
  const imageRef = useRef(null);
  useEffect(()=>{
    if(id){
    const fetchImage = async () => {
      console.log(id)
      const response = await fetch(`https://api.unsplash.com/photos/:${id}?client_id=QCDK1fmrgvGrpecrLwGZT8MA-7pJSsSkPPliAtbTcVY`);
      const data = await response.json();
      console.log(data)
      setImage("https://images.unsplash.com/photo-1695219770898-c8aa56fb111a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjQ5NTN8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2OTkyODQ1NTJ8&ixlib=rb-4.0.3&q=80&w=1080")

    }
    fetchImage()
  }
  }, [id])

  const handleImageLoad = (imgRef) => {
    console.log(imgRef.current.naturalHeight)

    const imgHeight = `${(imgRef.current.naturalHeight)/2}px`;
    imgRef.current.parentNode.style.height = imgHeight;
  };

  return (
    <div className={style.pinPage}>
      <div className={style.pin} >
        <div className={style.image}>
            <img src={image} className={style.pinImage} ref={imageRef} alt="image" onLoad={() => handleImageLoad(imageRef)} />
        </div>

        <div className={style.text}>
            <div className={style.upper}>
                <button className={style.profButton}>Profile</button>
                <button className={style.save}>Save</button>
            </div>


        </div>
      </div>
      <FiArrowLeft className={style.arrow} onClick={()=> window.history.back()}/>
    </div>
  )
}
