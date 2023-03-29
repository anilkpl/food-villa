import React, {useEffect, useState} from 'react'
import "./Body.css"
import { FoodCard } from './FoodCard'
import { Shimmer } from './Shimmer'

export const Body = () => {
  const [inputVal,setInputVal] = useState('');
  const [allRestaurants,setAllRestaurents] = useState([]);
  const [fillteredRestaurants,setFillteredRestaurents] = useState([])

  useEffect(() => {
    getAllRestaurentData()
  },[]);

  const filterdata = (inputVal,allRestaurants) => {
    return allRestaurants.filter((restaurant)=>{
      return restaurant?.data?.name?.toLowerCase()?.includes(inputVal?.toLowerCase())
    })
  }
  
  const onChangeFun = (e) => {
    setInputVal(e?.target?.value)
    const filteredVal = filterdata(inputVal,allRestaurants)
    setFillteredRestaurents(filteredVal);
    //if(e.target.value=="") {
    //  setRestaurents(foodCardList)
    (e?.target?.value=="" && setFillteredRestaurents(allRestaurants))
  }

  async function getAllRestaurentData() {
    try {
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
       if(data?.ok) {
        const jsonData = await data?.json();
        setAllRestaurents(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFillteredRestaurents(jsonData?.data?.cards[2]?.data?.data?.cards)

       } else {
        throw new Error("Something went wrong : getAllRestaurents")
       }
    } catch (error) {
      console.log(error.message)
    }
    
  }
  
  if(!allRestaurants) return null;

  return (allRestaurants?.length === 0 ?
    <>
      <div className="input-search">
        <input type="text" placeholder='Search Restaurent'
        value={inputVal} onChange={onChangeFun}/>
      </div>
      <div className='body'>
          {Array(24).fill("").map((restaurant,i) => {
             return <Shimmer key={i} restaurant = {restaurant}/>
              })}
        </div>
    </> 
        
     :(
        <>
        <div className="input-search">
          <input 
          type="text" placeholder='Search Restaurent'
          value={inputVal} onChange={onChangeFun}/>
        </div>
        <div className="body">
            {
              (fillteredRestaurants?.length===0 ? <h1>No Matches are found......</h1>  :
              (fillteredRestaurants.map((restaurant,index) => {
                    return <FoodCard key={index} restaurant={restaurant}/>
                })))
            }
        </div>
        </>
  ))
}
