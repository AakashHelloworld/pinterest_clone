import React, { useEffect, useRef } from 'react'
import style from "./Home.module.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate();
  const [totalImages, setTotalImages] = React.useState([])

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch("https://api.unsplash.com/photos/?client_id=QCDK1fmrgvGrpecrLwGZT8MA-7pJSsSkPPliAtbTcVY");
      const data = await response.json();
      // I am spreading the data and adding a ref property to each image so that I can access it inside it's children
      const imagesWithRefs = data.map(image => ({ ...image, ref: React.createRef() }));
      setTotalImages(imagesWithRefs);
    }
    fetchImage()
  }, [])

  const handleImageLoad = (imgRef) => {
    //  I am taking the height of the image and dividing it by 10 to get the number of rows it should span
    const imgHeight = imgRef.current.naturalHeight;
    console.log(imgHeight)
    const gridRowEnd = 'span ' + Math.ceil(imgHeight / 10);
    imgRef.current.parentNode.style.gridRowEnd = gridRowEnd;
  };

  return (
    <div className={style.pinContainer}>
      {
        totalImages.map((item, index) => (
          <div className={style.pin} key={item.id} onClick={()=> navigate(`/pin/${item.id}`)}>
            <img
              ref={item.ref}    
              className={style.image} 
              src={item.urls.regular}
              alt={item.description} 
              onLoad={() => handleImageLoad(item.ref)}
            />  
          </div>
        ))
      }
    </div>
  )
}
