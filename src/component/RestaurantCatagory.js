import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCatagory =({data,showItems,setShowIndex})=>{
    //console.log(data);
    
    const handlelClick =()=>{
        setShowIndex();

    }
    return(
         
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"
        onClick={handlelClick}>
        <span className="font-bold text-sm">{data.title}({data.itemCards.length})</span>
        <span>⬇️</span>
       </div>
        
       {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
};
export default RestaurantCatagory;