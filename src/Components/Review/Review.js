import React, { useEffect , useState, useCallback} from 'react'
import style from './Review.module.css'
import {createReview, getReview} from '../../Appwrite/reviewApi'
import { useSelector } from 'react-redux'

const Review = ({image}) => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const userId = useSelector(state=>state.id)
  const userName = useSelector(state=>state.userName)
  const [review, setReview] = React.useState('')
    const [reviewCollection, setReviewCollection] = useState([])

    const submithandler = useCallback(async (e) => {
      setSubmitLoading(true);
      e.preventDefault();
      if (review) {
        const file = {
          toId: image.userId,
          userId: userId,
          reviewContent: review,
          userName: userName,
          imageId: image.id,
        };
        const response = await createReview(file);
        console.log(response);
        setReview("");
        setSubmitLoading(false);
      }
      setSubmitLoading(false);

    }, [review, image.userId, userId, userName, image.id]);
    

    useEffect(() => {
      if(image?.userId){
      const fetchReview = async () => {
          const response = await getReview(image.id)
          console.log(image?.id)
          console.log(response)
          console.log(image?.userId)
          if(response?.total){
            const list = response.documents.map(review => 
               ({
                reviewId: review.$id,
                reviewContent: review.reviewContent,
                userName: review.userName
              }))
          console.log(list)
          setReviewCollection(list)
          }
        }
      fetchReview()
    }

  }, [image, submithandler])

  return (
    <div>


      <span>Review</span>
      { image?.userName ?
      <>
        <form className={style.reviewCreate} 
        onSubmit={submithandler}
        >
            <input value={review} onChange={(e) => setReview(e.target.value)} className={style.reviewInput} type="text" placeholder='Review'/>
            <button type='submit' className={style.reviewSubmit}>{submitLoading ? "Loading..." : "Submit"}</button>

        </form>
        {!!reviewCollection?.length &&
        <div className={style.reviewCollectionStyle}>
        {
  !!reviewCollection?.length ? reviewCollection.map(review => {
    return (
      <div key={review.reviewId} className={style.reviewDiv}>
      <div className={style.reviewUser}>
      <div className={style.avatar}>{review?.userName?.slice(0,1).toUpperCase()}</div>
        <p>{review.userName}</p>
      </div>
        <h5 className={style.reviewContent}>{review.reviewContent}</h5>
      </div>
    )
  })
  : <span>No Review</span>
}</div>
        }
          </> : <span>No Review</span>

      }

        

    </div>
  )
}

export default Review