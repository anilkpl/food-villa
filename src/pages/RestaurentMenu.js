import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { imgCdnLink } from "../constants";
import RestaurentInfoShimmer from "../componnents/RestaurentInfoShimmer";
import useRestaurentInfo from "../utils/useRestaurentInfo";
import "./RestaurentMenu.css"


const RestaurentMenu = () => {
    const { id } = useParams();
    const restaurantInfo = useRestaurentInfo(id)
    const { name,costForTwoMessage,city,cloudinaryImageId} = restaurantInfo
   
    return ( 
        Object?.keys(restaurantInfo)?.length === 0  ? <RestaurentInfoShimmer /> :
        <div className="resInfo">
            <h3>Restaurent Id : {id}</h3>
            <h3>{name}</h3>
            <img className="resInfoImg" alt="foodimg" src={imgCdnLink + cloudinaryImageId} />
            <h4>{city}</h4>
            <h4>{costForTwoMessage} Persons</h4>
        </div>
    )
}

export default RestaurentMenu;
