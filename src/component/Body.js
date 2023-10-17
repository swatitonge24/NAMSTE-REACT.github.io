import RestaurantCard from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body =()=>{
const[ListOfRestaurants,setListOfRestaurant] =useState([]);
const[filteredRestaurant,setFilteredRestaurant]=useState([]);
const[searchText,setSearchText] = useState ("");



   console.log(ListOfRestaurants);
useEffect(()=>{
  fetchData();
}, []);

const fetchData=async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  
  setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
  
};

const onlineStatus=useOnlineStatus();
if(onlineStatus==false)
return(
  <h1>Looks like you are offline!! Please check your internet connection.</h1>
)
const {loggedUser,setUserName} =useContext(UserContext)
//conditional rendering
return ListOfRestaurants.length==0 ?( < Shimmer />) :
(
      <div className="body">
      <div className="filter flex">
      <div className="search m-4 p-4">
      
    <input type="text"
    className="border border-solid border-black" value={searchText} 
    onChange={(e)=>{
      setSearchText(e.target.value);

    }} 
    />
<button className="px-4 py-1 bg-green-300  rounded-lg" onClick={()=>{
  //Filter the restaurant and update the UI
 const filteredRestaurant = ListOfRestaurants.filter(
    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredRestaurant(filteredRestaurant);
    
}}>Search</button>
</div>
<div className="search m-4 flex items-center p-2">


        <button className="px-4 py-1 bg-orange-100 rounded-lg "
         onClick={()=>{
            //Filter logic
            const filteredList =ListOfRestaurants.filter(
            (res)=>res.info.avgRating > 4
            );

            setListOfRestaurant(filteredList);
        }}
        >
        Top Rated Restaurants</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <label>Username : </label>
          <input className="border border-black p-2" value={loggedUser}
           onChange={(e)=>setUserName(e.target.value)

          }/>
        </div>
      </div>
      <div className="flex flex-wrap">
      {filteredRestaurant.map((restaurants) =>(
        <Link key ={restaurants.info.id} to = {"/restaurants/"+ restaurants.info.id}>
      
      
     <RestaurantCard resData={restaurants}/>
      
      </Link>
      ))
        
  }
  
  
      </div>
      </div>
    );
};
  export default Body;