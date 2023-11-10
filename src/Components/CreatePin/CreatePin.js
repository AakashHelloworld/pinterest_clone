import React, {useState} from 'react'
import style from './CreatePin.module.css'
import { UploadImge } from '../../Appwrite/storage'
import { useSelector } from 'react-redux'
import { createDocument } from '../../Appwrite/api'

export const CreatePin = () => {
    const [submitloading, setSubmitloading] = useState(false)
    const userName=useSelector(state=>state.userName)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageId , setImageId] = useState("")
    const submitDisable =()=>{
        if(title && description && selectedImage){
            return false
        }
        return true
    }

    const uploadImgeHandler = async(event) => {
        setSelectedImage(event.target.files[0]);
        if(event.target.files[0]){
            const response = await UploadImge(event.target.files[0])           
           console.log(response);
           setImageId(response.$id)
        }
    }

   const submitHandler = async(event) =>{
        event.preventDefault()
        setSubmitloading(true)
        console.log(title,description,imageId)
        const userData = {
            title,
            description,
            imageId,
            userId: userName
        }
        const response = await createDocument(userData)
        console.log(response)
        setSubmitloading(false)
    }
    
  return (
    <div className={style.createPin}>
        <div className={style.headingCreatePinContiner}>

            <h4 className={style.heading}>Create Pin</h4>
        
        </div>
        <div className={style.pinImageCreate}>

            <div className={style.imageUploadContainer}> 
            <label class={style.customfileupload} style={!selectedImage ?{ padding: "1rem 2rem"}:{padding:"0rem"}}>
                <input type="file" 
                            onChange={(event) => {
                                uploadImgeHandler(event)
        }}
                />
                      {selectedImage ? (
        <div className={style.imageSelectedContainer}>
          <img
            className={style.imageSelected}
            alt="not found"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
        </div>
      ) : (
            <span>   Upload Image</span>  
      )}
            </label>
            </div>

            <form className={style.input}  onSubmit={submitHandler}>
            <label style={selectedImage?{opacity:"1"}:{opacity:"0.3"}} className={style.labelTitle} for='title'>
            Title
            </label>
            <input style={selectedImage?{opacity:"1"}:{opacity:"0.3"}}  disabled={selectedImage?false:true} className={style.titleInput} type='text' onChange={(event) => setTitle(event.target.value)}/>
          
            <label style={selectedImage?{opacity:"1"}:{opacity:"0.3"}}  className={style.labelDescription} for='description'>
            Description
            </label>

            <input style={selectedImage?{opacity:"1"}:{opacity:"0.3"}}  className={style.descriptionInput} disabled={selectedImage?false:true} type='description' onChange={(event) => setDescription(event.target.value)}/>
         
            <button style={submitDisable()?{opacity:"0.3"}:{opacity:"1"}} type="submit"className={style.submit} disabled={submitDisable()}>{submitloading? "Loading..." : "Submit"}</button>
            </form>

        </div>
    </div>
  )
}
