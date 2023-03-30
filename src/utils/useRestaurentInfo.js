import { useState,useEffect } from "react";

const useRestaurentInfo = (id) => {
    const  [restaurantInfo,setRestaurentInfo ] = useState({})

    useEffect(() => {
        getRestaurentInfo();
    },[]); 

    async function getRestaurentInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`)
        const jsonData = await data?.json();
        setRestaurentInfo(jsonData?.data?.cards[0]?.card?.card?.info)

    }

    return restaurantInfo
}

export default useRestaurentInfo;