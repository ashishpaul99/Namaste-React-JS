import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

    const [showIndex,setShowIndex]=useState(null);
    const dummy="dummy";
    const {resId}=useParams();
    // console.log(resId);
    const resInfo=useRestaurantMenu(resId);

    if(resInfo===null){
        return <Shimmer/>
    }
    const {name,avgRatingString,totalRatingsString,costForTwoMessage,cuisines,areaName,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info;
    const {minDeliveryTime,maxDeliveryTime }=resInfo?.cards[2]?.card?.card?.info.sla;

    const items=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
    // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // filters only categories section 
    const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>(
        category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))
    // console.log(categories);

    return(
        <div className="grid grid-cols-[1fr_2fr_1fr] mt-10">
            <div></div>
            <div className="text-left">
                 <h1 className="font-bold mt-10 text-2xl ">{name}</h1>
                <p className="font-bold text-bold text-lg">{cuisines}</p>
                <h3>{"⭐"}{avgRatingString}({(totalRatingsString)}) - {costForTwoMessage}</h3>
                <h3>{"Outlet"}:{areaName}{" 🔽"}</h3>
                <h3>{minDeliveryTime}-{maxDeliveryTime} mins</h3>
                {/* categories accordian */}
                {/* controlled component */}
               
               {
                categories.map((category,index)=><RestaurantCategory
                 key={category?.card?.card?.categoryId} 
                 data={category?.card?.card}
                 resName={name}
                 resImageId={cloudinaryImageId}
                 resCity={areaName}
                 showItems={index===showIndex?true:false}
                 setShowIndex={()=>setShowIndex(index===showIndex?null:index)}
                 dummy={dummy}
                 />)
               }
                
            </div>
            <div></div>
        </div>
    )
}

export default RestaurantMenu;