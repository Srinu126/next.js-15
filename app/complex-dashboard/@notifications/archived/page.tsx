import Link from 'next/link'
import React from 'react'

const ArchivedNotifications = () => {
  return (
    <div>ArchivedNotifications
        <Link className='underline text-blue-700' href="/complex-dashboard">Notifications</Link>
    </div>
  )
}

export default ArchivedNotifications;