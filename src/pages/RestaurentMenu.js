import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { imgCdnLink } from "../constants";
import RestaurentInfoShimmer from "../componnents/RestaurentInfoShimmer";
import useRestaurentInfo from "../utils/useRestaurentInfo";

const RestaurentMenu = () => {
    const { id } = useParams();
    const restaurantInfo = useRestaurentInfo(id)
    const { name,costForTwoMessage,city,cloudinaryImageId} = restaurantInfo
   
    return ( 
        Object?.keys(restaurantInfo)?.length === 0  ? <RestaurentInfoShimmer /> :
        <div className="m-3 text-center">
            <h3 className="font-bold text-2xl">Restaurent Id : {id}</h3>
            <h3 className="font-bold text-xl">{name}</h3>
            <center>
                <img className="w-80 h-80" alt="foodimg" src={imgCdnLink + cloudinaryImageId} />
            </center>
            <h4 className="font-bold text-lg">{city}</h4>
            <h4 className="font-bold text-lg">{costForTwoMessage} Persons</h4>
        </div>
    )
}

export default RestaurentMenu;
