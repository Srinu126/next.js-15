import React from 'react'

const ProductDetails = async({params}: {params: Promise<{productId: string}>}) => {
    const productId = (await params).productId
  return (
    <div>
        <h1>Details of the product - {productId}</h1>
    </div>
  )
}

export default ProductDetails