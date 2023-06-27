import RestaurantCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length == 0 ? (<Shimmer/>) :(
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="search-box"/>
        <button
          className="filter-btn"
          onClick={() => {
            console.log(searchText,listOfRestaurants[0].data.name)
            const filteredRestaurants = listOfRestaurants.filter((res)=> (
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            ))
          console.log(filteredRestaurants)
          setFilteredRestaurants(filteredRestaurants)
          }
        }
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
