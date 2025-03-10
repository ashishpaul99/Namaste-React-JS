import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom" 

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
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4427145&lng=78.6481693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            

            const json = await data.json(); // Parsing the JSON response
            // console.log(json); // Logging the JSON response to the console

            // Setting the list of restaurants from the fetched data
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            ;
       
            setOriginalList(restaurants); // Store the original list
            setListOfRestaurant(restaurants ); // Set the list to be displayed
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Show shimmer effect while data is being fetched
    if ( listOfRestaurant?.length === 0) {
        return <Shimmer />;
    }
    

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            // Filter the original list based on search text
                            const filteredRestaurant = originalList.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setListOfRestaurant(filteredRestaurant); // Update the displayed list
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        // Filter the original list based on rating
                        const filteredRestaurant = originalList.filter(
                            (restaurant) => restaurant.info.avgRating > 4.5
                        );
                        setListOfRestaurant(filteredRestaurant); // Update the displayed list
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
              {listOfRestaurant?.map((restaurant) => (
                 <Link key={restaurant.info.id} className="restaurant-link" to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>))
              }
            </div>
        </div>
    );
};

export default Body;