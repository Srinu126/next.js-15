import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    absolute:"Blog Page"
  }
}

const Blog = async () => {
  await new Promise((resolve) => setTimeout(() => resolve("intentional delay"), 2000));
  return (
    <div>Blog</div>
  )
}

export default Blog