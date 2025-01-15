import React from 'react'

const ReviewDetails = async({params}: {params: Promise<{productId: string; reviewId: string}>}) => {
    const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  return (
    <div>
        <h1>Review Details for product-{productId} with review - {reviewId}</h1>
    </div>
  )
}

export default ReviewDetails