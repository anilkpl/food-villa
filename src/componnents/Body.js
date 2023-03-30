import React, {useEffect, useState} from 'react';
import SearchInput from '../utils/SearchInput';
import useOnline from '../utils/useOnline';
import { FoodCard } from './FoodCard';
import Shimmer from './Shimmer';
import { filterdata } from "../utils/helper";
import CircleIcon from '@mui/icons-material/Circle';
import useGetAllRestaurentData from '../utils/useGetAllRestaurentData';

export const Body = () => {
  const [inputVal,setInputVal] = useState('');
  const data = useGetAllRestaurentData();
  const [allRestaurants,setAllRestaurents,fillteredRestaurants,setFillteredRestaurents] = data;
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
