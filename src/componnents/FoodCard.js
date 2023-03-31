import React from 'react'
import { imgCdnLink } from '../constants'
import { Link } from 'react-router-dom'

export const FoodCard = (props) => {
  const {name,cloudinaryImageId,cuisines,id} = props.restaurant.data
  return (
    <Link to ={ `/restaurent/${id}`}>
      <div className="w-52 h-72 m-3 p-3 shadow-lg rounded-lg break-words bg-white">
        <img alt="foodImg" src={imgCdnLink + cloudinaryImageId} />
        <h4 className='font-semibold text-lg'>{name}</h4>
        <div className= "cuisines">{cuisines.join(",")}</div>
        <div>Rating : 4.3</div>
    </div>
    </Link>
  )
}
