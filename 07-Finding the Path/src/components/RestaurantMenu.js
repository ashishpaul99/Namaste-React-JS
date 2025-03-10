import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu=()=>{
    
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();

    useEffect(()=>{
       fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json);
        setResInfo(json.data)
    }

    
    if (resInfo===null) {
    return <Shimmer />;
    }

   const {name,cuisines,avgRatingString,totalRatingsString, costForTwoMessage}=resInfo?.cards[2].card?.card?.info;

   const {itemCards}=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card; 
   console.log("Extracted itemCards:", itemCards);
   console.log(Array.isArray(itemCards))

    
    return (
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{avgRatingString}({totalRatingsString}) - {costForTwoMessage}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <ul>
               {
                itemCards.map((item)=>(
                    <li key={item.card.info.id}> {item.card.info.name} - {"₹"+(item.card.info.price || item.card.info.defaultPrice)/100}</li>
                ))
               }
            </ul>

        </div>
    )
};

export default RestaurantMenu;

