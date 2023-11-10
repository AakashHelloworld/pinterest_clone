import React, { useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import style from "./PinImage.module.css"
import {FiArrowLeft} from "react-icons/fi"
import { getDocument } from '../../Appwrite/api'
export const PinImage = () => {
  const {id} = useParams();
  const [image, setImage] = React.useState({})
  
  const imageRef = useRef(null);
  useEffect(()=>{
    if(id){
      const fetchDocument = async ()=>{
        const response = await getDocument(id);
        console.log(response);   
        if(response?.title){
          setImage(response)
        }
      }
      fetchDocument();
  }
  }, [id])

  const handleImageLoad = (imgRef) => {
    console.log(imgRef.current.naturalHeight)

    if(imgRef.current.naturalHeight > 3000){
      const imgHeight = `${(imgRef.current.naturalHeight)/6}px`;
      imgRef.current.parentNode.style.height = imgHeight;
    }else{
    const imgHeight = `${(imgRef.current.naturalHeight)/3}px`;
    imgRef.current.parentNode.style.height = imgHeight;
    }
  };

  return (
    <div className={style.pinPage}>
      <div className={style.pin} >
        <div className={style.image}>
            <img src={image?.imageId?.href} className={style.pinImage} ref={imageRef} alt="image" onLoad={() => handleImageLoad(imageRef)} />
        </div>

        <div className={style.text}>

        <div className={style.upper}>
            <button className={style.profButton}>Profile</button>
            <button className={style.save}>Save</button>
        </div>

        <div className={style.profilePic}>
        <div className={style.profilePicContainer}>
        <div className={style.avatar} >
        {image?.userName?.slice(0,1).toUpperCase()}
        </div>
        </div>
          <button className={style.follow}>Follow</button>
      </div>


      <div className={style.CommentContainer}>

          <div className={style.commentHeadingContainer}>
          <h3 className={style.commentHeading}>Comments</h3>

          </div>


      </div>

        </div>



      </div>




      <FiArrowLeft className={style.arrow} onClick={()=> window.history.back()}/>
    </div>
  )
}
