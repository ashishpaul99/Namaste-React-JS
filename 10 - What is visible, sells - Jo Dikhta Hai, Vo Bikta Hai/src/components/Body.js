import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {
    // State to hold the original list of restaurants
    const [originalList, setOriginalList] = useState([]);
    // State to hold the filtered list of restaurants
    const [listOfRestaurant, setListOfRestaurant] = useState([]); 

    // State to hold the search text
    const [searchText, setSearchText] = useState("");

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
            console.log(json);

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
                    }}>Top Rated Restaurant
                </button>

                </div>
                
            </div>
            <div className="flex flex-wrap">
              {listOfRestaurant?.map((restaurant) => (
                 <Link key={restaurant.info.id} className="restaurant-link" to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))
              }
            </div>
        </div>
    );

};

export default Body;