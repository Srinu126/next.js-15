import React from 'react'

const CatchAllRoutes = async({params}: {params: Promise<{slug: string[]}>}) => {
    const {slug} = await params;
    console.log(slug);
    if(!slug) return <h1>Docs</h1>
  return (
    <div>CatchAllRoutes</div>
  )
}

export default CatchAllRoutes