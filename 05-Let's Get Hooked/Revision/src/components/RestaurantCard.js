import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;

    // destructuring data
    const {cloudinaryImageId, name, avgRating, cuisines, sla}=resData?.info;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating+" stars"}</h3>
            <h3>{sla?.deliveryTime+" minutes"}</h3>
            
        </div>
    )

}

export default RestaurantCard;