import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";



const RestaurantMenu =()=>{
    
    const {resId} = useParams();
    const resInfo= useRestaurantMenu(resId);

    const[showIndex,setShowIndex] = useState(null);
     if (resInfo == null) return ( <Shimmer />) ;
    const{ name,cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const catagories =
resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(catagories);


    return(
    
        <div className="text-center">
        <h1 className="font-bold my-6  text-2xl">{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage }</p>
            {/* Catagories Accordian */}
            {catagories.map((catagory,index)=>(
                //controlled compoment
                <RestaurantCatagory key={catagory?.card?.card?.title} data ={catagory?.card?.card}
               showItems={index== showIndex ? true : false }
               setShowIndex={()=>setShowIndex(index)}

                />
            )

            
            )}

               
                
            
        </div>
    )
}
export default RestaurantMenu;
