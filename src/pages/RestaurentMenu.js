import { useEffect } from "react";
import { useParams } from "react-router-dom";



const RestaurentMenu = () => {
    const {id} = useParams();
    //console.log(id)
    useEffect(() => {
        getRestaurentInfo();
    },[]); 

    async function getRestaurentInfo() {
        
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=30532submitAction=ENTER")
        const restaurentInfo = await data?.json();
        console.log(restaurentInfo)

    }
    return (
        <div>
            <h3>Restaurent Id : {id}</h3>
        </div>
    )
}

export default RestaurentMenu;
