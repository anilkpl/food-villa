import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Shimmer = () => {
  return (
        <div className="card">
            <Skeleton height={100}/>
            <h4><Skeleton /></h4>
            <div className= "cuisines"><Skeleton /></div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>  
        </div>
    
  )
}
