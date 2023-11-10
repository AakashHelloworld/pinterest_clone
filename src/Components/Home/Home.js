import React, { useEffect, useRef } from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getDocuments } from '../../Appwrite/api'
export const Home = () => {
  const navigate = useNavigate();
  const [totalImages, setTotalImages] = React.useState([])
  useEffect(()=>{
    const fetchImage = async () => {
      const response = await getDocuments();
      const imagesWithRefs = response?.map(image => ({ ...image, ref: React.createRef() }));
      setTotalImages(imagesWithRefs);
      console.log(response, "hello doc")
    }
    fetchImage()
  },[])

  const handleImageLoad = (imgRef) => {
    //  I am taking the height of the image and dividing it by 10 to get the number of rows it should span
    const imgHeight = imgRef.current.naturalHeight;
    const gridRowEnd = 'span ' + Math.ceil(imgHeight / 10);
    imgRef.current.parentNode.style.gridRowEnd = gridRowEnd;
  };

  return (
    <div className={style.pinContainer}>
      { 
        !!totalImages.length &&
        totalImages.map((item, index) => (
          <div className={style.pin} key={item.$id} onClick={()=> navigate(`/pin/${item.$id}`)}>
            <img
              ref={item.ref}    
              className={style.image} 
              src={item?.imgUrl?.href}
              alt={"image"} 
              onLoad={() => handleImageLoad(item.ref)}
              loading='lazy'
            />  
          </div>
        ))
      }
    </div>
  )
}
