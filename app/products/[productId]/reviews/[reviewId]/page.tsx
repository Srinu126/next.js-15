import { notFound } from "next/navigation";
import React from "react";

function getRandom(value: number) {
  return Math.floor(Math.random() * 10 * value);
}

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  const random = getRandom(2);

  if (random > 5) {
    throw new Error("Error in fetching reviews for this product");
  }
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review Details for product-{productId} with review - {reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
