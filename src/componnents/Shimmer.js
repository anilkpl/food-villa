import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {
  return (
        <div className="w-52 h-72 m-3 p-3 shadow-lg rounded-lg break-words bg-white ml-5">
            <Skeleton height={100}/>
            <h4><Skeleton /></h4>
            <div className= "cuisines"><Skeleton /></div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>
            <div><Skeleton /></div>  
        </div>
    
  )
}

export default Shimmer;
