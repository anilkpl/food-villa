import { useState,useEffect } from "react";
const useGetAllRestaurentData = () => {
    const [allRestaurants,setAllRestaurents] = useState([]);
    const [fillteredRestaurants,setFillteredRestaurents] = useState([])

    useEffect(() => {
        getAllRestaurentData()
      },[]);
    
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

    return [allRestaurants,setAllRestaurents,fillteredRestaurants,setFillteredRestaurents]
}

export default useGetAllRestaurentData;