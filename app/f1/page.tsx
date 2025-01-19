import Link from 'next/link'
import React from 'react'

const Folder1 = () => {
  return (
    <div>Folder1
        <Link href="/f1/f2">F2</Link>
        <Link href="/f3">F3</Link>
    </div>
  )
}

export default Folder1