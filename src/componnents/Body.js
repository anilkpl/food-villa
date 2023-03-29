import React, {useEffect, useState} from 'react'
import SearchInput from '../utils/SearchInput'
import useOnline from '../utils/useOnline'
import "./Body.css"
import { FoodCard } from './FoodCard'
import Shimmer from './Shimmer'
import { filterdata } from "../utils/helper";
import CircleIcon from '@mui/icons-material/Circle';

export const Body = () => {
  const [inputVal,setInputVal] = useState('');
  const [allRestaurants,setAllRestaurents] = useState([]);
  const [fillteredRestaurants,setFillteredRestaurents] = useState([])

  useEffect(() => {
    getAllRestaurentData()
  },[]);

  const isOnline = useOnline();
  
  if (!isOnline) {
    return <h3 className='internetConError'><CircleIcon color='error'/> No internet Connection....Check the Network conections</h3>
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
      <SearchInput inputVal = {inputVal} onChangeFun = {onChangeFun} />
      <div className='body'>
          {Array(24).fill("").map((restaurant,i) => {
             return <Shimmer key={i} restaurant = {restaurant}/>
              })}
        </div>
    </> 
        
     :(
        <>
        <SearchInput inputVal = {inputVal} onChangeFun = {onChangeFun} />
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
