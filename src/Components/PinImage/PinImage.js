import React, { useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import style from "./PinImage.module.css"
import {FiArrowLeft} from "react-icons/fi"
import { getDocument } from '../../Appwrite/api'
import Review from '../Review/Review'
import { useNavigate } from 'react-router-dom'

export const PinImage = () => {
  const navigate = useNavigate();
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
    const imgHeight = imgRef.current.naturalHeight;
    const imgWidth = imgRef.current.naturalWidth;
    const ascpectRatio = imgWidth / imgHeight;
    const realheight = 508/ascpectRatio
    imgRef.current.style.aspectRatio = ascpectRatio;
  };

  return (
    <div className={style.pinPage}>
      <div className={style.pin} >
        <div className={style.image}>
            <img src={image?.imageId?.href} className={style.pinImage} ref={imageRef} alt="image" onLoad={() => handleImageLoad(imageRef)} />
        </div>

        <div className={style.text}>
        <div className={style.profilePic}>
        <div className={style.profilePicContainer}>
        <div onClick={() => navigate(`/user/${image?.userId}`)} className={style.avatar} >
        {image?.userName?.slice(0,1).toUpperCase()}
        </div>
        </div>
      </div>

      <div className={style.CommentContainer}>
          <h3 className={style.commentHeading}>Title: {image?.title}</h3>
      </div>

      <div className={style.CommentContainer}>

          <div className={style.commentHeadingContainer}>
          <h3 className={style.commentHeading}>Comments</h3> 

          <Review image={image} />
      </div>


      </div>

        </div>
        </div>

      <FiArrowLeft className={style.arrow} onClick={()=> window.history.back()}/>
    </div>
  )
}
