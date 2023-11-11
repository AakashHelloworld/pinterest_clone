import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../Appwrite/auth'
import { getUserDocuments } from '../../Appwrite/api'
import style from './User.module.css'
import { useNavigate } from 'react-router-dom'
import handleImageLoad from '../../Utils/imageloadHandler'
import { useSelector } from 'react-redux'
export const User = () => {
    const userId = useSelector(state => state.id)
    const navigate = useNavigate();
    const [user, setUser] = React.useState({})
    const [documents, setDocuments] = React.useState([])
    const { id } = useParams();
    useEffect(() => {
        if (id) {
        const fetchDocument = async () => {
          const response = await getUser(id);
          console.log(response);
          setUser(response);
        };
        fetchDocument();
    }
    }
    , [id])

    useEffect(() => {
        if (id) {
          const fetchDocument = async () => {
            const response = await getUserDocuments(id);
            console.log(response);
            if(response?.length){
            const imagesWithRefs = response?.map(image => ({ ...image, ref: React.createRef() }));
            setDocuments(imagesWithRefs);
            }
          };
          fetchDocument();
        }
    },[id])
  return (
    <>    <div className={style.user}>
        <div className={style.userdetailContainer}>
                <div className={style.userdetail}>
                    <span className={style.avatar}>{user?.name?.slice(0,1).toUpperCase()}</span>
                    <h1>{user?.name}</h1>
                    <p>{user?.email}</p>
                    { userId === id &&
                    <button className={style.logout}>Logout</button>
                    }
                </div>
        </div>
    </div>
                <h1 style={{textAlign:"center", margin:"1rem", fontWeight: '400'}}>Create</h1>
                    <div className={style.pinContainer}>
                { 
                !!documents?.length &&
                documents.map((item, index) => (
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
                </>

  )
}
