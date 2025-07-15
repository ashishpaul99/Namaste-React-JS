import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import { withPromotedLabel } from "./RestaurantCard";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Body = () => {
    // State to hold the original list of restaurants
    const [originalList, setOriginalList] = useState([]);
    // State to hold the filtered list of restaurants
    const [listOfRestaurant, setListOfRestaurant] = useState([]); 

    // State to hold the search text
    const [searchText, setSearchText] = useState("");
    
    // it stores a new componet which has promted lable on restaurant card
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    const {loggedInUser,setUserName}=useContext(UserContext);


    

    // console.log(originalList);
    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch data from the Swiggy API
    const fetchData = async () => {
        try {
            // Fetch data from the proxy server
            const data = await fetch("http://localhost:3000/api/restaurants");
            

            const json = await data.json(); // Parsing the JSON response
            // console.log(json); // Logging the JSON response to the console
            // console.log(json);

            // Setting the list of restaurants from the fetched data
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       
            setOriginalList(restaurants); // Store the original list
            setListOfRestaurant(restaurants ); // Set the list to be displayed
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

     // Online status
   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false) return <h1>Looks like you are offline! Please check your internet connection</h1>


    // Show shimmer effect while data is being fetched
    if ( listOfRestaurant?.length === 0) {
        return <Shimmer />;
    }

   
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-2">
                    <input
                        type="text"
                        className="search-box border-2 border-solid border-black"
                        value={searchText}
                        data-testid="searchInput"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            // Filter the original list based on search text
                            const filteredRestaurant = originalList.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setListOfRestaurant(filteredRestaurant); // Update the displayed list
                        }}
                    >Search
                    </button>
                </div>
                <div className="flex items-center" >
                <button
                    className="filter-btn px-4 py-2 bg-gray-100 rounded-lg "
                    onClick={() => {
                        // Filter the original list based on rating
                        const filteredRestaurant = originalList.filter(
                            (restaurant) => restaurant.info.avgRating > 4.5
                        );
                        setListOfRestaurant(filteredRestaurant); // Update the displayed list
                    }}>Top Rated Restaurants
                </button>
                </div>
                <div className="w-fit py-10 px-4 ">
                    <label className="px-2">username:</label>
                     <input className=" w-40 px-4 py-3 border border-black rounded " type="text" 
                     value={loggedInUser}
                     onChange={(e)=>setUserName(e.target.value)}
                     ></input>
                </div>
   
            </div>
            <div className="flex flex-wrap">
              {listOfRestaurant?.map((restaurant) => (
                <Link to={"/resMenu/"+restaurant.info.id} key={restaurant.info.id} className="res-link">
                {
                    restaurant.info.promoted==="true"? <RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant}/>
                }
                 
                </Link>))
              }
            </div>
        </div>
    );

};

export default Body;