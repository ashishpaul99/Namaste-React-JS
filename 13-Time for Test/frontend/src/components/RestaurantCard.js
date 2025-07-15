import { CDN_URL } from "../utils/constants";

import { useContext} from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const {resData}=props;
    // console.log(resData);
    // destructuring data
    const {cloudinaryImageId, name, avgRating, cuisines, sla}=resData?.info;
    const {loggedInUser}=useContext(UserContext);
    return(
        <div data-testid="resCard" className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating+" stars"}</h3>
            <h3>{sla?.deliveryTime+" minutes"}</h3>
            <h3 className="text-lg font-semibold text-gray-700 bg-yellow-100 border border-yellow-300 px-4 py-2 rounded-xl shadow-s">This is dish for you, <span className="text-orange-600 font-bold">{loggedInUser}</span></h3>
        </div>
    )
}

// HOC - it takes RestaurantCard as input and returns a Restaurant card with promoted label 

// input - RestaurantCard
// output -  RestaurantCardPromoted
export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
       return(
         <div>
             <label className="absolute bg-black text-white rounded-md py-2 px-4 m-2">Promoted</label>
             <RestaurantCard {...props}/>
         </div>
       )
  }
}

export default RestaurantCard;
