import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;

    // destructuring data
    const {cloudinaryImageId, name, avgRating, cuisines, sla}=resData?.info;
    
    return(
        <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating+" stars"}</h3>
            <h3>{sla?.deliveryTime+" minutes"}</h3>
        </div>
    )

}

export default RestaurantCard;


