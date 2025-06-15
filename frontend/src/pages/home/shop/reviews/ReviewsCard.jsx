import React from 'react'
import avatar from '../../../../assets/avatar.png'
import { formateDate } from '../../../../utils/formateDate';
import RatingStars from '../../../../components/RatingStars';
const ReviewsCard = ({productReviews}) => {

    const reviews = productReviews || []
    console.log(reviews);

return (
  <div className='my-6 bg-white p-8'>
    <div>
      {
        reviews.length > 0 ? (<div>
            <h3 className='text-lg font-medium'>All comments ...</h3>
            <div>
              {
                reviews.map((review, index) => (
                  <div key={index} className='mt-4'>
                    <div className='flex gap-4 items-center'>
                    <img src={avatar} alt="User avatar" className="size-14" />
                    <div className='space-y-1'>
                        <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{review?.userId}</p>
                        <p className='text-[12px] italic'>{formateDate(review?.createdAt)}</p>
                        <RatingStars rating={review?.rating}/>
                    </div>
                   </div>
                   <div className='text-gray-600 mt-5 border '>
                    <p>{review?.comment}</p>
                   </div>
                  </div>
                ))
              }
            </div>
          </div>) : <p>No Reviews yet!</p>
      }
    </div>
  </div>
);

}

export default ReviewsCard
